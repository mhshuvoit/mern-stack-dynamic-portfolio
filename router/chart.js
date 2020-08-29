const express = require('express')
const router = express.Router()
const Authenticate = require('../authenticate')

const ServiceController = require('../controller/chart')

router.get('/get', ServiceController.getAllService)
router.post('/add', Authenticate, ServiceController.postService)
router.get('/:id', ServiceController.getSingleService)
router.delete('/:id', Authenticate, ServiceController.deleteService)
router.put('/:id', Authenticate, ServiceController.updateService)

module.exports = router