const express = require('express');
const { signUp, signIn } = require("../Controllers/Aunthantication.js") ;
const Routes = express.Router();



Routes.post('/signup', signUp);
Routes.post('/signIn', signIn);



module.exports = {Routes};