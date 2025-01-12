import jwt from 'jsonwebtoken';
import User from '../models/user.js';

export const auth = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        
        if (!token) {
            return res.status(401).json({ message: "No auth token found" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Get user from database with role information
        const user = await User.findById(decoded.userId);
        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        // Attach user info to request
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ message: "Please authenticate" });
    }
}; 