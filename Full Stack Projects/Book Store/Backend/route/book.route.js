import express from "express"
import { createBook, getAllBook, getBook } from "../controllers/book.controller.js"

const router = express.Router()

router.get("/", getAllBook)
router.post("/books", createBook)
router.get("/:id", getBook)

export default router