require('dotenv').config();
const express = require("express")
const cors = require("cors")
const mongoose = require('mongoose')

const app = express();
const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI
const corsOptions = {
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowHeaders: ['Content-Type', 'Authorization']
}
cors(corsOptions)

app.use(express.json())

// database connected
mongoose
.connect(MONGO_URI)
.then(() => console.log('mongodb is connected'))
.catch((error) => console.log(error));

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