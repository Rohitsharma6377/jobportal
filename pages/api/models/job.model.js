import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true

    },
    requiements:[{
        type:String,
       }],
    salary:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    jobTitle:{
        type:String,
        required:true
    },
    jobType:{
        type:String,
        required:true

    },
    jobPosition:{
        type:String,
        required:true

    },

    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Company',
        required:true

    },
    created_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    application:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Application',
        
    }]

} ,{timeStamps:true});

export default Job = mongoose.model("Job" , jobSchema);