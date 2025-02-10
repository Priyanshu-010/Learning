import express from "express";
import { createWorkout, deleteWorkout, getAllWorkouts, getSingleWorkout, updateWorkout } from "../controllers/workouts.controller.js";

const router = express.Router();

router.get("/", getAllWorkouts);
router.get("/:id", getSingleWorkout);
router.post("/", createWorkout);
router.put("/:id", updateWorkout);
router.delete("/:id", deleteWorkout);

export default router