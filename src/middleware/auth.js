const { Users } = require('../settings/db')

const auth = (req, res, next) => {
  const { email } = req.body
  Users.findOne({ where: { email } })
    .then(user => {
      if (!user) {
        return res.status(400).json({
          status: 'error',
          message: 'Invalid email or password'
        })
      }
      req.user = user
      next()
    })
    .catch(err => {
      next(err)
    })
}
