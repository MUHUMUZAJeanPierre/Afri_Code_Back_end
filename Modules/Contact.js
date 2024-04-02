const mongoose = require('mongoose');

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
 
module.exports = mongoose.model('FeedbackInformation', FeedbackInfo);