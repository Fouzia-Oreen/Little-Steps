import dotenv from 'dotenv'
dotenv.config();
import express from "express"
import cors from "cors"
import mongoose from 'mongoose'
import authRoutes from '../api/routes/authRoutes.js'

const app = express();
const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI
app.use(
    cors({
      origin: process.env.CLIENT_URL,
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
    console.log(`Server is running to port:${PORT}`);
})