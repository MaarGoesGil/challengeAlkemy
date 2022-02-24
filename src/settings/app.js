const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const indexRouter = require('../routes/index')
const error404 = require('../middlewares/error404')
const errorHandler = require('../middlewares/errorHandler')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// Config
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use('/', indexRouter)

// Errors
// • catch 404 and forward to error handler
app.use(error404)
// • error handler
app.use(errorHandler)

module.exports = app
