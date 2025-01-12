import express from "express";
import { auth } from "../middleware/auth.js";
import { checkRole } from "../middleware/checkRole.js";
import {
    getAllUsers,
    deleteUser,
    updateUserRole,
    getUserStats
} from "../controllers/AdminController.js";

const AdminRoutes = express.Router();

// Protect all admin routes with authentication and admin role check
AdminRoutes.use(auth, checkRole(['admin']));

// Get all users
AdminRoutes.get("/users", getAllUsers);

// Get user statistics
AdminRoutes.get("/stats", getUserStats);

// Delete user
AdminRoutes.delete("/users/:userId", deleteUser);

// Update user role
AdminRoutes.patch("/users/:userId/role", updateUserRole);

export default AdminRoutes;
