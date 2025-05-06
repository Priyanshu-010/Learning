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