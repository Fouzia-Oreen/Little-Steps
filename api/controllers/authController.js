import User  from "../models/User.js";
import bcrypt  from "bcryptjs";
import jwt from 'jsonwebtoken'

/* Register - user */
export const registerUser = async (req, res) => {
    // get the values from request-body
    const { userName, userEmail, password, role } = req.body; 
    
    // requirements the register-user shuld have
    const existingUser = await User.findOne({
      $or: [{ userEmail }, { userName }],
    });
    
    // if the user already exists with same email, or name
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User name or user email already exists",
      });
    }
  
    // hash the password with bcryptjs
    const hashPassword = await bcrypt.hash(password, 10);
    // create a new user if no user exists
    const newUser = new User({
      userName,
      userEmail,
      role,
      password: hashPassword,
    });
  
    // save the user
    await newUser.save();
  
    // return success true with message
    return res.status(201).json({
      success: true,
      message: "User registered successfully!",
    });
};

/* Login - user */
export const loginUser = async(req, res) => {
    // get the values from request-body
    const { userEmail, password } = req.body; 

    // requirements the register-user shuld have
    const checkUser = await User.findOne({ userEmail });

    // check the user comparing paswords from bcryptjs
    if (!checkUser || !(await bcrypt.compare(password, checkUser.password))) {
      return res.status(401).json({
        success: false,
        message: "Invalid credintials",
      });
    }
    // get a JWT 
    const accessToken = jwt.sign({
      _id: checkUser._id,
      userName: checkUser.userName,
      userEmail: checkUser.userEmail,
      role: checkUser.role,
    }, 'JWT_SECRET', {expiresIn: '120m'})

    // return success if all requirements matches
    res.status(201).json({
      success: true,
      message: "User loggedin successfully!",
      data: {
        accessToken,
        user : {
          _id: checkUser._id,
          userName: checkUser.userName,
          userEmail: checkUser.userEmail,
          role: checkUser.role,
        }
      }
    });
}

// export const verifyUser = async (req, res) => { ... }