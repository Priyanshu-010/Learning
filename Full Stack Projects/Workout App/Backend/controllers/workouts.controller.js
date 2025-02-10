import Workouts from "../models/workout.model.js";


export const getAllWorkouts = async (req, res) => {
  try {
    const workout = await Workouts.find({})
    res.status(200).json(workout)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

export const getSingleWorkout = async (req, res) => {
  try {
    const {id} = req.params
    const workout = await Workouts.findById(id)
    res.status(200).json(workout)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}
export const createWorkout = async(req,res) =>{
  try {
    const {workout} = await Workouts.create(req.body);
    res.status(201).json(workout)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
};

export const updateWorkout = async (req, res) => {
  
}

export const deleteWorkout = async (req, res) => {
  
}