import express from "express";
import Workouts from "../models/workout.model.js";

const router = express.Router();

router.get("/", (req,res) =>{
  res.send("Get all workouts")
});
router.get("/:id");
router.post("/" , async(req,res) =>{
  try {
    const workout = await Workouts.create(req.body);
    res.status(201).json(workout)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
});
router.put("/:id");
router.delete("/:id");

export default router