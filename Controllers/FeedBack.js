const FeedbackData = require('../Modules/Contact');

const createFeedback = async (req,res,next)=>{
    try {
        const newFeedback = await  FeedbackData.create(req.body)
        res.status(400).json({message: 'feedBackSent already', newFeedback });
    } catch (error) {
        res.status(500).json({message:'error in sending message', error})
    }
}

module.exports= {createFeedback}