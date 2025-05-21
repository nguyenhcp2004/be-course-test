const express = require('express')
const router = express.Router()

const controller = require('../controllers/cat.controller')

router.post('/', controller.createCat)

module.exports = router
