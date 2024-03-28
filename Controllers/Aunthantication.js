const StudentData = require('../Modules/StudentData');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const signUp = async(req,res,next)=>{
    try {
        const {email, password, user} = req.body;
        const alreadyExist = await StudentData.findOne({email});
        if(alreadyExist){
            return res.status(400).json({message: "Student already exist"});
        } else{
            const encrypted = bcrypt.hashSync(password);
            const toSave = {
                email,
                password: encrypted,
                role:"student",
            }
            const newStudentCreated = await StudentData.create(toSave);
            res.status(200).json({message: "Student created", newStudentCreated});
        }
    } catch (error) {
        res.status(500).json({message:"error creating student", error});
    }
}

const signIn = async (req, res) => {
    try {
        const already = await StudentData.findOne({email: req.body.email});
        if(already){
            const validate = bcrypt.compare(req.body.password, already.password);
            if(validate){
                const secret = "secreteNumber"
                const token  =  jwt.sign({id: already._id}, secret,{expiresIn:200000000000000000000000000000000});
                res.status(200).json({message:'success student log in', token});
            } else{
                res.status(400).json({message: "Password is incorrect", error});   
            }
        }
    } catch (error) {
        console.error(error);
    }
}

const getAllStudents=async (req,res)=>{
    try {
        const students = await StudentData.find({});
        res.status(200).json({message: "All students", data:students});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}


const DeleteStudent =async(req,res)=>{
    try {
        const student = await StudentData.findByIdAndDelete(req.query.id);
        res.status(200).json({message: "Student deleted", data:student});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
module.exports = {signUp, signIn,getAllStudents,DeleteStudent};