import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.js";
import todoRouter from "./routes/todo.js";


const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.use("/api/auth", authRouter)
app.use("/api/todo", todoRouter)

app.listen(process.env.PORT, ()=> {
  console.log("Server is running on port 3000")
})