const mongoose = require('mongoose')
const User = require('./user.model')
const Cat = require('./cat.model')
const db = {}

// Define schema
db.User = User
db.Cat = Cat

module.exports = db
