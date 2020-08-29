const router = require('express').Router()
const authenticate = require('../authenticate')
const {login, register, allUser} = require('../controller/userController')

router.post('/register', register)
router.post('/login', login)
router.get('/all', authenticate, allUser)

module.exports = router