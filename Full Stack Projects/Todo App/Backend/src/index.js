import express from "express";
import {connectDb}  from "./connection/db.js";

const app = express();
const port = 3000;

app.get("/", (req, res) =>{
  res.send("Hello World")
})

app.listen(port, ()=>{
  console.log(`Server is running on port ${port}`)
  connectDb();
})