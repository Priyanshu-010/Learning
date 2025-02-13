import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/workouts.route.js";
import mongoose from "mongoose";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next)=>{
  // console.log(req.path, req.method)
  next()
})

app.use("/api/workouts", router);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to Database")
  app.listen(process.env.PORT , () => {
    console.log(`Server is running on port ${process.env.PORT}`)
  })
}).catch((err) => {
  console.log(err)
})

