import express from "express";
import { createList, deleteList, getList, updateList } from "../contorllers/list.controller.js";

const router = express.Router();

router.post("/addTask", createList)
router.put("/updateTask/:id", updateList)
router.delete("/deleteTask/:id", deleteList)
router.get("/getTask/:id", getList)

export default router