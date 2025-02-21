import express from 'express';
import { createTodo, getAllTodo, getSingleTodo } from '../controller/todo.controller.js';

const router = express.Router();

router.get("/", getAllTodo)
router.get("/:id", getSingleTodo)
router.post("/", createTodo);

export default router