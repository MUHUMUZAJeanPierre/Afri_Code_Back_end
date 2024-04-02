const mongoose = require('mngoose');

const FeedbackInfo = mongoose.Schema({
    email:{
        type: String,
        required: true,
    },
    courseName:{
        type: String,
        required: true
    },
    comment:{
        type: String,
        required: true
    }
});
 
module.exports = mongoose.model('courseDataInformation', FeedbackInfo);