const createError = require('http-errors')

const error404 = (req, res, next) => {
  next(createError(404))
}

module.exports = error404
