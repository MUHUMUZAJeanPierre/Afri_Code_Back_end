const { createCourse,listAllCourse ,FindOneCourse,deleteCourse,updateCourse} = require("../Controllers/courses");
const express = require("express")
const courseRoute =express.Router() ;

courseRoute.post('/createCourse', createCourse);
courseRoute.get("/getAllCourse",listAllCourse);
courseRoute.get("/findCourse",FindOneCourse);
courseRoute.delete("/deleteCourse",deleteCourse);
courseRoute.put("/UpdateCourse",updateCourse);






module.exports = {courseRoute};
