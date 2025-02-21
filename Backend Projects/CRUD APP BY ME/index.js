import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 3000

app.get("/", (req, res)=>{
  res.send("Hello World")
})

mongoose.connect("")

app.listen(port, ()=>{
  console.log("Server is running on port " + port)
})