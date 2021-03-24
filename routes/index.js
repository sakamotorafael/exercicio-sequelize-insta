const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')
const authController = require('../controllers/authController')
const postController = require('../controllers/postController')
const auth = require('../middlewares/auth')
const upload = require('../configs/uploads')

router.get('/', auth.notLogged, authController.create)

router.get('/login', auth.notLogged, authController.create)
router.post('/login', authController.login)

router.get('/registro', auth.notLogged, userController.create)
router.post('/registro', userController.store)

router.get('/publicar', auth.isLogged, postController.create)
router.post('/publicar', upload.single('photo'), postController.store)

router.get('/home', auth.isLogged, postController.index)

module.exports = router
