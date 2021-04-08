const express = require('express')
const router = express.Router()
const Authenticate = require('../authenticate')
const ServiceController = require('../controller/course')
const fileUpload = require('../middleware/file-middleware')

router.get('/get', Authenticate, ServiceController.getAllService)
router.post('/add', fileUpload.single('image'), ServiceController.postService)
router.get('/:id', ServiceController.getSingleService)
router.delete('/:id', ServiceController.deleteService)
router.put('/:id', ServiceController.updateService)

module.exports = router