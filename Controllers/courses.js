const CourseData=require("../Modules/CourseModule")

const createCourse = async (req,res,next)=>{
    try {
        console.log(req.body);
        const {posterPath, courseName, courseTitles, courseDescription, courseTeacher, content} = req.body;
        var alreadyExist = await CourseData.findOne({courseName:courseName})
        if(alreadyExist == null){
        const newCourse = new CourseData({
            posterPath,
            courseName,
            courseTitles,
            courseDescription,
            courseTeacher,
            content
        });
        const savedCourse = await newCourse.save();
        res.status(200).json({message: "Course created", savedCourse});}
        else{
            res.status(401).json({message: "Course already exist"});
        }
        
    } catch (error) {

        res.status(500).json({message: error.message});
        
    }

}

const listAllCourse =async (req,res,next)=>{
    try {
        const courses = await CourseData.find({});
        res.status(200).json({message: "All courses", courses});

        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const FindOneCourse= async (req,res,next)=>{
    try {
        const course = await CourseData.findOne({_id: req.query.id});
        res.status(200).json({message: "Course found", course});
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const deleteCourse = async (req,res,next)=>{
    try {
        const course = await CourseData.findOneAndDelete({courseName: req.query.courseName});
        res.status(200).json({message: "Course deleted", course});
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const updateCourse =async (req,res,next)=>{
    try {
        const exist= await CourseData.findOne({_id:req.query.id})
        console.log(exist);
        if(exist!=null){
            const course = await CourseData.findOneAndUpdate({_id:req.query.id}, req.body);
            res.status(200).json({message: "Course updated", course:course});
            

        }
        else{
            res.status(401).json({message:"Course doesn't exist"})
        }
      
    } catch (error) {
        res.status(500).json({message: error.message});
        
    }
}





module.exports={
    createCourse,
    listAllCourse,
    FindOneCourse,
    deleteCourse,
    updateCourse
}