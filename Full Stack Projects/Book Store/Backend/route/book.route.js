import express from "express"
import { createBook, deleteBook, getAllBook, getBook, updateBook } from "../controllers/book.controller.js"

const router = express.Router()

router.get("/", getAllBook)
router.post("/books", createBook)
router.get("/:id", getBook)
router.put("/:id", updateBook)
router.delete("/:id", deleteBook)

export default router