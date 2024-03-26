const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { Routes } = require("./Routes/StudentRoute");
const { signUp, signIn } = require("./Controllers/Aunthantication");
app.use(express.json());


app.use('/api', Routes);
app.listen(4000, ()=>{
    mongoose.connect('mongodb://localhost:27017/StudentRegistrations');
    console.log('server listening on http://localhost:27017/StudentRegistrations');
})
