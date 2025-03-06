const express = require("express")
const { addCar, updateCar, removeCar, getrentals, getAlluserReview } = require("../controller/adminController")


const router = express.Router()

router.post("/car" , addCar)
router.put("/car/:id" , updateCar)
router.delete("/car/:id" , removeCar)
router.get("/rentals" , getrentals)
router.get("/reviews" , getAlluserReview)


module.exports=router