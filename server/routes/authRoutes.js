const express = require("express")
const { registerUser, loginUser } = require("../controller/authController")

const router = express.Router()

router.post("/register", registerUser)
router.get("/login", loginUser)


module.exports= router 
