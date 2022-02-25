const { jwt } = require('jsonwebtoken')
const { Users } = require('../settings/db')

const verifiedToken = (req, res, next) => {
  const { token } = req.headers
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        status: 'error',
        message: 'Invalid token'
      })
    }
    Users.findOne({ where: { id: decoded.id } })
      .then(user => {
        if (!user) {
          return res.status(400).json({
            status: 'error',
            message: 'User not found'
          })
        }
        next()
      })
      .catch(err => {
        next(err)
      })
  })
}

const generateToken = (req, res, next) => {
  const { id } = req.user
  const token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '24h' })
  res.set('Authorization', `Bearer ${token}`)
  next()
}

module.exports = {
  verifiedToken,
  generateToken
}
