const expressAsyncHandler = require("express-async-handler")
const User = require("../models/userModels")
const registerUser = expressAsyncHandler(async (req , res )=>{

const {name , phone , email ,password}=req.body

if(!name || !email|| !phone|| !password) {

    res.status(400)
    throw new Error("Please fill all the details")
}
    
//  checks if user require

const emaiExist = await User.findOne({email : email})
const phoneExist = await User.findOne({phone : phone})

if(emaiExist || phoneExist){
    res.status(400)
    throw new Error("Please fill all the details")
}
 
const user = await User.create({
    name , email ,phone , password
})


if(!user){
    res.status(400)
    throw new Error("User not created")
}

    res.status(201).json(user)
})

const loginUser = async(req , res )=>{

    res.send("user login")
}

module.exports={registerUser, loginUser}