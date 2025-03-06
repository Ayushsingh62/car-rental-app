const express = require("express")
const { getAllcarreviews, addcarReviews } = require("../controller/reviewController")

const router = express.Router()

router.get("/" , getAllcarreviews)
router.post("/", addcarReviews)

module.exports=router