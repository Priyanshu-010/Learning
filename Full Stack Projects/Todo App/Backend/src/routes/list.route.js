import express from "express";
import { createList, deleteList, updateList } from "../contorllers/list.controller.js";

const router = express.Router();

router.post("/addTask", createList)
router.put("/updateTask/:id", updateList)
router.delete("/deleteTask/:id", deleteList)

export default router