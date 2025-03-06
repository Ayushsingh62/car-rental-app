const getAllcarreviews = async(req , res )=>{
res.send("All reviews are here")

}

const addcarReviews = async(req , res )=>{
    res.send(" review added")
    
    }
    
    
module.exports={getAllcarreviews , addcarReviews}