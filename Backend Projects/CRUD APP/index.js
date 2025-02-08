import express, { Router } from 'express';
import mongoose from 'mongoose';
import Product from './models/product.model.js';
import router from './routes/product.route.js';

const app = express();
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api/products", router)

mongoose.connect("mongodb+srv://priyanshurai2772:PqOGAcfAGG7bmHpf@cluster0.nh8yb.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0").then(() => {
  console.log("Connected to Database")
}).catch((err) => {
  console.log(err)
})

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.listen(port, ()=>{
  console.log(`Server is running on port ${port}`)
})