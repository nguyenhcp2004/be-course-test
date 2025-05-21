// const systemConfig = require('../config/system')
const express = require('express')
const router = express.Router()
const userRoutes = require('./user.route')

// Register routes
router.use('/user', userRoutes)

module.exports = router
