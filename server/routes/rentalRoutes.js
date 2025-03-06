const express = require("express")
const { getAllrentals, getAllrental, addrentals, updaterentals } = require("../controller/rentalController")

const router = express.Router()

router.get("/" , getAllrentals)
router.get("/:cid" , getAllrental)
router.post("/:cid" , addrentals)
router.put("/:cid" , updaterentals)



module.exports=router