import express from 'express';
const router = express.Router();
import { loginUser, registerUser } from "../controllers/authController.js";
import authinticateMiddleware from '../middleware/authMiddleware.js'

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/check-auth", authinticateMiddleware, (req, res) => {
    const user = req.user
    res.status(201).json({
        success: true,
        message: "User loggedin successfully!",
        data: {
          user 
        }
      })
});


export default router;