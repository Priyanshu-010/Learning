import mongoose from 'mongoose'

export const connectDb = () =>{
  try {
    mongoose.connect("mongodb+srv://priyanshurai2772:JrNplO05qzHgHYA6@cluster0.xtph2ul.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(()=>{
    console.log("Connected to Database")
  })
  } catch (error) {
    console.log(error)
  }
}