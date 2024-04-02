const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors=require("cors")
const { Routes } = require("./Routes/StudentRoute");
const { signUp, signIn } = require("./Controllers/Aunthantication");
require("dotenv").config()
const { courseRoute } = require("./Routes/courseRoute");

app.use(express.json());

app.use(cors());


app.use('/api/user', Routes);
app.use('/api/course',courseRoute);
app.listen(4000, ()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(console.log('server listening on http://localhost:27017/StudentRegistrations'))
})
