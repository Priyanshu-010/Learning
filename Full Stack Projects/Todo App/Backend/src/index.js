import express from "express";
import {connectDb}  from "./connection/db.js";
import authRouter from "./routes/auth.route.js"
import listRouter from "./routes/list.route.js"

const app = express();
const port = 3000;

app.get("/", (req, res) =>{
  res.send("Hello World")
})

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use("/api/auth", authRouter)
app.use("/api/list", listRouter)

app.listen(port, ()=>{
  console.log(`Server is running on port ${port}`)
  connectDb();
})