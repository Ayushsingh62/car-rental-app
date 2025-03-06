const { mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({

name:{
    type:String ,
    require:true ,
},
email:{type:String ,
    unique:true,
    require:true ,
},
phone:{
    type:String ,
    unique:true,
    require:true ,
},
password:{
    type:String ,
    unique:true,
    require:true ,
},
city:{
    type:String
},
isAdmin:{

    type:Boolean ,
    require:true,
    default:false ,
},
license:{
    type:String ,
    unique:true,
    
}

},
{
    timestamps : true
}

)
module.exports= mongoose.model("User", userSchema)

