const { bcrypt } = require('bcrypt')
const { Users } = require('../settings/db')

const hashPassword = (req, res, next) => {
  const { password } = req.body
  bcrypt.hash(password, 10)
    .then(hash => {
      req.body.password = hash
      next()
    })
    .catch(err => {
      next(err)
    })
}

const verifiedPassword = async (req, res, next) => {
  const { email, password } = req.body
  const user = await Users.findOne({ where: { email } })
  if (!user) {
    return res.status(401).json({
      status: 'error',
      message: 'Invalid email or password'
    })
  }
  bcrypt.compare(password, user.password)
    .then(isMatch => {
      if (!isMatch) {
        return res.status(401).json({
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

module.exports = {
  hashPassword,
  verifiedPassword
}
