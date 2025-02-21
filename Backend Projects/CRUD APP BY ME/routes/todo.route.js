import express from 'express';
import { createTodo, getAllTodo, getSingleTodo, updateTodo } from '../controller/todo.controller.js';

const router = express.Router();

router.get("/", getAllTodo)
router.get("/:id", getSingleTodo)
router.post("/", createTodo);
router.put("/:id", updateTodo);

export default router