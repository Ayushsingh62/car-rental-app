const { config } = require("dotenv");
const express = require("express");
const { connect } = require("mongoose");
const connectDB = require("./config/db_config");

require("dotenv").config();

const app = express();
const Port = process.env.Port || 3000;

connectDB();

// body -parse

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//  default auth
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to car services" });
});

// Authes routes 

app.use("/api/auth" , require("./routes/authRoutes"))

// cars routes

app.use ("/api/car", require("./routes/carRoutes"))
//  admin routes

app.use ("/api/admin" , require("./routes/adminRoutes"))

//  rentals routes 

app.use ("/api/rentals" , require("./routes/rentalRoutes"))

app.listen(Port, () => {
  console.log(`server is runing at port ${Port}`);
});
