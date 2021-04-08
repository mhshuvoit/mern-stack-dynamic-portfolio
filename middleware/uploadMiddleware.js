const multer = require('multer')
const path = require('path')

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/img')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + '-' + file.originalname)
    }

})

let upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: (req, file, cb) => {
        const types = /jpeg|jpg|png/
        const extName = types.test(path.extname(file.originalname).toLowerCase())
        const mimetype = types.test(file.mimetype)

        if (extName && mimetype) {
            cb(null, true)
        } else {
            cb(new Error('I don\'t have a clue!'))
        }
    }
})

module.exports = upload