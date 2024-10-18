import cors from "cors";
import dotenv from 'dotenv';
import express from "express";
import mongoose from 'mongoose';
import authRoutes from '../api/routes/authRoutes.js';
import mediaRoutes from '../api/routes/instructor-routes/mediaRoutes.js';
import instructorCourseRoutes from "./routes/instructor-routes/courseRoutes.js";
dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI;
const CLIENT_URL = process.env.CLIENT_URL;

app.use(
    cors({
      origin: CLIENT_URL,
      methods: ["GET", "POST", "DELETE", "PUT"],
      allowedHeaders: ["Content-Type", "Authorization"],
    })
  );

app.use(express.json())

// database connected
mongoose
.connect(MONGO_URI)
.then(() => console.log('mongodb is connected'))
.catch((error) => console.log(error));

// router configuration
app.use('/auth', authRoutes)
app.use('/media', mediaRoutes)
app.use("/instructor/course", instructorCourseRoutes);

// middlewares
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).json({
        success: false,
        message: "Something went wrong!"
    })
})


// listen to app
app.listen(PORT,() => {
    console.log(`Server is running to port: ${PORT}`);
})