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
  const {title, reps, load} = req.body
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
    const workout = await Workouts.findByIdAndUpdate(id, req.body)
    if(!workout){
      return res.status(404).json({message: "Workout not found"})
    }
    const updatedWorkout = await Workouts.findById(id)
    res.status(200).json(updatedWorkout, {message: "Workout updated"})
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

export const deleteWorkout = async (req, res) => {
  try {
    const {id} = req.params
    const workout = await Workouts.findByIdAndDelete(id)
    
    if(!workout){
      return res.status(404).json({messaage: "Wrokout not found"})
    }
    
    res.status(200).json({message: "Workout deleted"})
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}