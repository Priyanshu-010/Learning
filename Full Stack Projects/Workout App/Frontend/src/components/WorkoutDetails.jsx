import React from 'react'
import './WorkoutDetails.css'

const WorkoutDetails = ({workout}) => {
  return (
    <div className='workout-card'>
      <h3>{workout.title}</h3>
      <p><strong>Load (in kg): </strong> {workout.load}</p>
      <p><strong>Reps: </strong> {workout.reps}</p>
      <p>{workout.createdAt}</p>
    </div>
  )
}

export default WorkoutDetails