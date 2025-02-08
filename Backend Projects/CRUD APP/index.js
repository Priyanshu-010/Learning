import express from 'express';
import mongoose from 'mongoose';
import Product from './models/product.model.js';

const app = express();
const port = 3000

app.use(express.json())


mongoose.connect("mongodb+srv://priyanshurai2772:PqOGAcfAGG7bmHpf@cluster0.nh8yb.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0").then(() => {
  console.log("Connected to Database")
}).catch((err) => {
  console.log(err)
})

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body)
    res.status(201).json(product)
  } catch (error) {
    res.status(500).json({messaage: error.message})
  }
})

app.get("/api/products", async(req, res) =>{
  try {
    const product = await Product.find({})
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({messaage: error.message})
  }
})

app.get("/api/products/:id", async(req, res) =>{
  try {
    const {id} = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({messaage: error.message})
  }
})
app.put("/api/products/:id", async(req, res) =>{
  try {
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body)
    
    if(!product){
      return res.status(404).json({messaage: "Product not found"})
    }

    const updatedProduct = await Product.findById(id)
    res.status(200).json(updatedProduct)


  } catch (error) {
    res.status(500).json({messaage: error.message})
  }
})

app.delete("/api/products/:id", async(req, res) =>{
  try {
    const {id} =req.params;
    const product = await Product.findByIdAndDelete(id);

    if(!product){
      return res.status(404).json({messaage: "Product not found"})
    }

    res.status(200).json({messaage: "Product deleted"})
  } catch (error) {
    res.status(500).json({messaage: error.message})
  }
})


app.listen(port, ()=>{
  console.log(`Server is running on port ${port}`)
})