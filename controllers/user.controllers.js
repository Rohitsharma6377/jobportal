import { User } from "../models/user.model";
import bcrypt from "bcrypt"; // Import bcrypt module
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, password, role } = req.body;
    if (!fullname || !email || !phoneNumber || !password || !role) {
      // Fix typo in the if statement
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exists",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      // Use await for User.create() and assign it to a variable
      fullname,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
    });

    return res.status(201).json({
      // Send a response after creating a new user
      message: "User created successfully",
      success: true,
      user: newUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      // Send a response with error message
      message: "Internal Server Error",
      success: false,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      // Remove role from the if statement
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }

    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "User not found",
        success: false,
      });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    // Compare the provided password with the hashed password
    if (!isValidPassword) {
      return res.status(400).json({
        message: "Invalid password",
        success: false,
      });
    }

    // check the role is correct or not
    if (role !== user.role) {
      return res.status(400).json({
        message: "Account doesn't exist with current role.",
        success: false,
      });
    }

    const tokenData = {
      userId: user._id,
    };
    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "id",
    });

    user -
      {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
        phoneNumber: user.phoneNumber,
        role: user.role,
        profile: user.profiles,
      };
    // Create a token

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 + 24 + 60 + 60 + 1000,
        httpsOnly: true,
        sameSite: "strict",
      })
      .json({
        message: `welcome back ${user.fullname}`,
        user,
        success: true,
      });

    return res.status(201).json({
      // Send a response after successful login
      message: "Login successful",
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      // Send a response with error message
      message: "Internal Server Error",
      success: false,
    });
  }
};

export const logout = async (req,res) =>{
    try {
        
    } catch (error) {
        
    }
}