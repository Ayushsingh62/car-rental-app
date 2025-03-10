const {  mongoose } = require("mongoose")

const connectDB  = async()=>{
try {
    
const conn = await mongoose.connect(process.env.MONGO_URI)

console.log("DB connected succesful", conn.connection.name)
} catch (error) {
    console.log("DB not connected" , error.message)
}
;
}

module.exports =connectDB