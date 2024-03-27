const mongoose = require('mongoose');

const CourseData = mongoose.Schema({
    posterPath:{
        type: String,
        required:true
    },
    courseName: {
        type: String,
        required: true
    },
    courseTitles: {
        type: String,
        required:true
    },
    courseDescription: {
        type: String,
        required: true
    },
    courseTeacher: {
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('courseDataInformation', CourseData);