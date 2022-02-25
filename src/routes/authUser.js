const { Router } = require('express')
const register = require('../controllers/register')
const { hashPassword, verifiedPassword } = require('../middleware/bcrypt')
const { generateToken } = require('../middleware/token')

const router = Router()

router.post('/register', hashPassword, register)
router.get('/login', verifiedPassword, )

module.exports = router
