const express = require('express');
const { signUp, signIn ,getAllStudents,DeleteStudent} = require("../Controllers/Aunthantication.js") ;
const Routes = express.Router();



Routes.post('/signup', signUp);
Routes.post('/signIn', signIn);
Routes.get("/getAllStudent",getAllStudents);

Routes.delete("/deleteStudent",DeleteStudent);



module.exports = {Routes};