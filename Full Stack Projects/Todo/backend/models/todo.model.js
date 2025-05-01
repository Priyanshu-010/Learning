import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  // userId:{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "user",
  //   required: [true, "User Id is required"]
  // },
  title:{
    type: String,
    required: true
  },
  w:{
    type: Boolean,
    default: false
  }
})

const Todo = mongoose.model('todo', todoSchema);
export default Todo