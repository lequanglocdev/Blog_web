const { register,login ,loginGoogle} = require("../controllers/auth")

const router = require("express").Router()

router.post("/register",register)
router.post("/login",login)
router.post("/loginGoogle",loginGoogle)

module.exports = router