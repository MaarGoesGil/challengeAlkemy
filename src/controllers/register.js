const { Users } = require('../settings/db')

const register = (req, res, next) => {
  const { name, lastName, email, password } = req.body
  Users.create({ name, lastName, email, password })
    .then(user => {
      res.status(201).json({
        status: 'ok',
        message: 'User created successfully, please check email to verify your account'
      })
    })
    .catch(err => {
      next(err)
    })
}

module.exports = register
