const express = require('express')
const router = express.Router()

const ServiceController = require('../controller/info')

router.get('/get', ServiceController.getAllService)
router.post('/add', ServiceController.postService)
router.get('/:id', ServiceController.getSingleService)
router.delete('/:id', ServiceController.deleteService)
router.put('/:id', ServiceController.updateService)

module.exports = router