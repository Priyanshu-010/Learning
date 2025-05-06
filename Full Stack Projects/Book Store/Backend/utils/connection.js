import mongoose from "mongoose"

export const connectdb = () => {
  try {
    mongoose.connect("mongodb+srv://priyanshurai2772:lJFGDWcvpMyVnuwe@cluster0.wf6ppdz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
      .then(console.log("Connected to Database"))
  } catch (error) {
    console.log(error)
  }
}