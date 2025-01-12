import express from 'express';
import { register, login, logout } from '../controllers/Auth.js';
import { auth } from '../middleware/auth.js';
import { checkRole } from '../middleware/checkRole.js';

const AuthRouter = express.Router();

// Public routes
AuthRouter.post("/login", login);
AuthRouter.post("/logout", auth, logout);

// Protected routes
AuthRouter.post("/register", auth, checkRole(['admin']), register); // Only admins can register new users
AuthRouter.get("/admin-only", auth, checkRole(['admin']), (req, res) => {
    res.json({ message: "Admin access granted" });
});

AuthRouter.get("/user-profile", auth, checkRole(['user', 'admin']), (req, res) => {
    res.json({ user: req.user });
});

export default AuthRouter;