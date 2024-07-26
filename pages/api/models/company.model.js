import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        
    },
    website:{
        type:String,
    },
    location:{
        type:String,
    },
    logo:{
        type:String,

    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
},{timeStamps:true});

export default Company = mongoose.model("Company" , companySchema);
