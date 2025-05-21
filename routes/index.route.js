// const systemConfig = require('../config/system')
const express = require('express')
const router = express.Router()
const userRoutes = require('./user.route')
const catRoutes = require('./cat.route')
// Register routes
router.use('/users', userRoutes)
router.use('/cats', catRoutes)

module.exports = router
