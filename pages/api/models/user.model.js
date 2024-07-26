import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
    type:String,
    required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },    
    role:{
        type:String,
        enum:['student' , 'recruiter'],
        required:true
    },
    profiles:{
        bio:{type:String},
        skills:[{type:String}],
        resume:{type:String}, // URL to resume file
        resumeOriginalName:{type:String},
        company:{type:mongoose.Schema.Types.ObjectId , ref:'Company'},
        profilePhoto:{
            type:String,
            default:'',
        }
    }

}, {timeStamps:true});

export const User = mongoose.model('User' , userSchema);