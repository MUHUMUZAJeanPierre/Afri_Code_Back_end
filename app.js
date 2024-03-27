const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { Routes } = require("./Routes/StudentRoute");
const { signUp, signIn } = require("./Controllers/Aunthantication");
const { courseRoute } = require("./Routes/courseRoute");

app.use(express.json());


app.use('/api/user', Routes);
app.use('/api/course',courseRoute)
app.listen(4000, ()=>{
    mongoose.connect('mongodb+srv://umuduguduhub:Umuduguduhub123@cluster0.xyw1fla.mongodb.net/umuduguduhub')
    .then(console.log('server listening on http://localhost:27017/StudentRegistrations'))
})
