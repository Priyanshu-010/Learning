import express from 'express';
import { createTodo, deleteTodo, getAllTodo, getSingleTodo, updateTodo } from '../controller/todo.controller.js';

const router = express.Router();

router.get("/", getAllTodo)
router.get("/:id", getSingleTodo)
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router