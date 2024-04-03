const express = require('express');
const { signUp, signIn ,getAllStudents,DeleteStudent} = require("../Controllers/Aunthantication.js") ;
const { createFeedback, getAllFeedback, deleteFeedback } = require('../Controllers/FeedBack.js');
const Routes = express.Router();



Routes.post('/signup', signUp);
Routes.post('/signIn', signIn);
Routes.get("/getAllStudent",getAllStudents);

Routes.delete("/deleteStudent",DeleteStudent);
Routes.post("/addFeedback",createFeedback);
Routes.get ("/allFeedback",getAllFeedback);
Routes.delete("/deleteFeedback",deleteFeedback)



module.exports = {Routes};