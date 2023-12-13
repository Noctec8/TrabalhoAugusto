const {Router} = require("express")
const AuthController = require("../controllers/auth-controller")
const router = Router()

const authController = new AuthController()
router.post('/', authController.Login)

module.exports = router