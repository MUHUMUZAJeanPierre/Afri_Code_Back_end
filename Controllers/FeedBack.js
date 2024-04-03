const FeedbackInfo = require('../Modules/Contact');

const createFeedback = async (req,res,next)=>{
    try {
        const newFeedback = await  FeedbackInfo.create(req.body)
        res.status(400).json({message: 'feedBackSent already', newFeedback });
    } catch (error) {
        res.status(500).json({message:'error in sending message', error})
    }
}


const getAllFeedback= async (req,res,next)=>{
    try {
        const feedback = await FeedbackInfo.find({});
        res.status(200).json({message: "All feedback", feedback});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const deleteFeedback = async (req,res,next)=>{
    try {
        const feedback = await FeedbackInfo.findByIdAndDelete(req.query.id);
        res.status(200).json({message: "Feedback deleted", feedback});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports= {createFeedback,getAllFeedback,deleteFeedback}