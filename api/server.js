import express from "express"
const app = express();
app.listen(5001,() => {
    console.log('App is lisining to port:5001');
})