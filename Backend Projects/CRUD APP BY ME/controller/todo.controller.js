import Todo from "../model/todo.model.js"


export const getAllTodo = async (req, res) =>{
  try {
    const todo = await Todo.find({});
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

export const getSingleTodo = async (req, res) =>{
  try {
    const {id} = req.params;
    const todo = await Todo.findById(id);
    res.status(200).json(todo)
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

export const createTodo = async (req,res) =>{
  try {
    const todo = await Todo.create(req.body);
    res.status(200).json(todo)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

export const updateTodo = async (req, res) =>{
  try {
    const {id} = req.params;
    const todo = await Todo.findByIdAndUpdate(id, req.body);
    const updatedTodo = await Todo.findById(id);
    res.status(200).json(updatedTodo)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

export const deleteTodo = async (req, res) =>{
  try {
    const {id} = req.params;
    const todo = await Todo.findByIdAndDelete(id);
    res.status(200).json({message: "Todo deleted"})
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}