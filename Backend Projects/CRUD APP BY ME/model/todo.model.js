import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  timeRequired: {
    type: Number,
    required: true
  }
},{
  timestamps: true
}
)

const Todo = mongoose.model("Todo", todoSchema);
export default Todo