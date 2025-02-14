import React from 'react';
import './WorkoutDetails.css';
import deleteIcon from '../assets/delete.png';
import useWorkoutsContext from '../hooks/useWorkoutsContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();
  const handleClick = async () => {
    const response = await fetch('http://localhost:3000/api/workouts/' + workout._id, { method: 'DELETE' });
    const data = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_WORKOUT', payload: data })
    }
  }
  return (
    <div className='workout-card'>
      <h3>{workout.title}</h3>
      <p><strong>Load (in kg): </strong> {workout.load}</p>
      <p><strong>Reps: </strong> {workout.reps}</p>
      <p className='date'>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
      <span onClick={handleClick}><img src={deleteIcon} className="delete-icon" /></span>
    </div>
  )
}

export default WorkoutDetails