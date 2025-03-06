const express = require("express")
const { getCars,  getCar,} = require("../controller/carController")

const router = express.Router({mergeParams : true})


router.get("/" , getCars)

router.get("/:id" , getCar)


router.use("/:cid/reviews" , require("./reviewsRoutes"))

module.exports= router