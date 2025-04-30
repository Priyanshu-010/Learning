import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.js";
import todoRouter from "./routes/todo.js";
import { connectDB } from "./utils/connect.js";
import bodyParser from "body-parser";

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use("/api/user", authRouter)
app.use("/api/todo", todoRouter)

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({message})
})

app.listen(process.env.PORT, ()=> {
  console.log("Server is running on port 3000")
  connectDB()
})