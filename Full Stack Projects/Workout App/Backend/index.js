import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use((req, res, next)=>{
  console.log(req.path, req.method)
  next()
})

app.get("/", (req, res) => {  
  res.send("Hello World")
})

app.listen(process.env.PORT , () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})