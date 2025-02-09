import express from "express";
import dotenv from "dotenv";
import router from "./routes/workouts.js";

dotenv.config();
const app = express();
app.use(express.json());

app.use((req, res, next)=>{
  console.log(req.path, req.method)
  next()
})

app.use("/api/workouts", router);

app.listen(process.env.PORT , () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})