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