import { Book } from "../models/book.model.js";

export const createBook = async (req, res) =>{
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message})
  }
}

export const getAllBook = async(req, res)=>{
  try {
    const book = await Book.find();
    res.status(200).json(book)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message})
  }
}

export const getBook = async (req, res)=>{
  try {
    const {id} = req.params
    const book = await Book.findById(id);
    res.status(200).json(book)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message})
  }
}

export const updateBook = async (req, res) =>{
  try {
    const {id} = req.params;
    const book = await Book.findByIdAndUpdate(id, req.body);
    if(!book){
      return res.status(404).json({message: "Book not found"})
    }
    const updatedBook = await Book.findById(id);
    res.status(200).json(updatedBook)
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
  }
}

export const deleteBook = async(req, res) =>{
  try {
    const {id} = req.params;
    const book = await Book.findByIdAndDelete(id);
    if(!book){
      return res.status(404).json({message: "Book not found"})
    }

    res.status(200).json({message: "Book deleted"})
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})  
  }
}