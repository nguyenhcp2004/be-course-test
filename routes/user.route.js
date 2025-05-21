const express = require('express')
const router = express.Router()

const controller = require('../controllers/user.controller')
const loggerMiddleware = require('../middleware/user.middleware')

router.get('/', loggerMiddleware, controller.loginView)
router.post('/login', loggerMiddleware, controller.login)
router.get('/register', loggerMiddleware, controller.registerView)
router.get('/home', loggerMiddleware, controller.homeView)

module.exports = router
