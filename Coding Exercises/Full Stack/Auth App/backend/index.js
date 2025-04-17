import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./models/db.js";
import AuthRouter from "./routes/auth.route.js";
import ProductRouter from "./routes/product.router.js";

const app = express();
dotenv.config();

app.get("/", (req, res)=>{
  res.send("Hello World")
})

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use('/auth', AuthRouter);
app.use('/product', ProductRouter);

app.listen(process.env.PORT, ()=>{
  console.log("Server is running on port " + process.env.PORT)
  connectDB();
})