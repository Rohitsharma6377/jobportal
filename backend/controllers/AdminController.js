import User from '../models/user.js';

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}).select('-password');
        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findByIdAndDelete(userId);
        
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateUserRole = async (req, res) => {
    try {
        const { userId } = req.params;
        const { role } = req.body;

        if (!['user', 'admin'].includes(role)) {
            return res.status(400).json({ message: "Invalid role" });
        }

        const user = await User.findByIdAndUpdate(
            userId,
            { role },
            { new: true }
        ).select('-password');

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User role updated successfully", user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getUserStats = async (req, res) => {
    try {
        const totalUsers = await User.countDocuments();
        const adminUsers = await User.countDocuments({ role: 'admin' });
        const regularUsers = await User.countDocuments({ role: 'user' });

        res.status(200).json({
            stats: {
                total: totalUsers,
                admins: adminUsers,
                users: regularUsers
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}; 