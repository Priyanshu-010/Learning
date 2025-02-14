import Workouts from "../models/workout.model.js";
import mongoose from "mongoose";

export const getAllWorkouts = async (req, res) => {
  try {
    const workout = await Workouts.find({}).sort({createdAt: -1})
    res.status(200).json(workout)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

export const getSingleWorkout = async (req, res) => {
  try {
    const {id} = req.params
    //Checking if the workout id is correct according to the database or not
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({message: "Workout not found"})
    }

    const workout = await Workouts.findById(id)
    if(!workout){
      return res.status(404).json({message: "Workout not found"})
    }
    res.status(200).json(workout)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}
export const createWorkout = async(req,res) =>{
  const {title, reps, load} = req.body
  let emptyFields = []

  if(!title) emptyFields.push("title")
  if(!reps) emptyFields.push("reps")
  if(!load) emptyFields.push("load")
  if(emptyFields.length > 0) return res.status(400).json({error: "Please fill in all the fields", emptyFields})
  try {
    const workout = await Workouts.create({title, reps, load});
    res.status(201).json(workout)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
};

export const updateWorkout = async (req, res) => {
  try {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({message: "Workout not found"})
    }
    const workout = await Workouts.findByIdAndUpdate(id, req.body)
    if(!workout){
      return res.status(404).json({message: "Workout not found"})
    }
    const updatedWorkout = await Workouts.findById(id)
    res.status(200).json(updatedWorkout)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

export const deleteWorkout = async (req, res) => {
  try {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({message: "Workout not found"})
    }
    const workout = await Workouts.findByIdAndDelete(id)
    
    if(!workout){
      return res.status(404).json({messaage: "Wrokout not found"})
    }
    
    res.status(200).json(workout)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}