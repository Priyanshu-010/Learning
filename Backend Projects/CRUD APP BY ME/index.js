import express from 'express';
import mongoose from 'mongoose';
import router from './routes/todo.route.js';

const app = express();
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api/todo", router)

app.listen(port, ()=>{
  console.log("Server is running on port " + port)
  mongoose.connect("mongodb+srv://priyanshurai2772:XPu5JDyZUVQFNiEI@cluster0.orkfa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(()=>{
    console.log("Connected to Database")
  }).catch((err)=>{
    console.log(err)
  })
})