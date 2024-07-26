import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
dotenv.config({});
const app = express();
export default function handler(req, res) {

    
    app.get("/home",(req,res)=>{
        return res.status(200).json({
            message:"Welcome to the home page"  ,
            success :true
        })
    });
    // middleware
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
    app.use(cookieParser());
    const corsOptions = {
        origin: 'https//localhost:5173' ,
        Credentials:true
    }
    app.use(cors(corsOptions));
    const PORT = process.env.PORT || 3000;
    
    app.listen(PORT , ()=>{
        connectDB
        console.log(`Server running at port ${PORT}`);
    })
}
