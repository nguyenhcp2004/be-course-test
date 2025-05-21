const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const httpErrors = require('http-errors')
const connectDB = require('./config/db')
const apiRoutes = require('./routes/index.route')

require('dotenv').config()
const app = express()
app.use(bodyParser.json())
app.use(morgan('dev'))
connectDB()

app.use(express.static('public'))

app.set('views', `${__dirname}/views`)
app.set('view engine', 'pug')

// app.get('/login', (req, res) => {
//   res.render('pages/login')
// })

app.get('/', async (req, res, next) => {
  res.status(200).send({ message: 'Welcome to Restful API server' })
})

// Mount API routes
app.use('/api', apiRoutes)

app.use(async (req, res, next) => {
  next(httpErrors.BadRequest('Bad request'))
})

app.use(async (err, req, res, next) => {
  ;(res.status = err.status || 500),
    res.send({
      error: {
        status: err.status || 500,
        message: err.message
      }
    })
})

const HOST_NAME = process.env.HOST_NAME
const PORT = process.env.PORT

app.listen(PORT, HOST_NAME, () => {
  console.log(`Server running at: http://${HOST_NAME}:${PORT}`)
  //Connect database
})
