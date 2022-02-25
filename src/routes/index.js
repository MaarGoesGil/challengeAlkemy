const { Router } = require('express')
const router = Router()
const authUser = require('./authUser')
const categories = require('./categories')

/* Authentication Users */
router.use('/auth', authUser)

router.use('/categories', categories)

module.exports = router
