import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import AuthRouter from "./routes/Auth.js";
import AdminRoutes from './routes/AdminRoutes.js';

// Load environment variables
dotenv.config();

const app = express();

// CORS configuration
app.use(cors({
    origin: 'http://localhost:5173', // Vite's default port
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie'],
}));

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/auth', AuthRouter);
app.use('/api/admin', AdminRoutes);

// MongoDB Connection
const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error('MongoDB URI is not defined in environment variables');
        }
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
};

// Connect to database before starting server
connectDB().then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Failed to connect to database:', err.message);
});