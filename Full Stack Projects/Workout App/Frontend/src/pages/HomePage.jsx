import React, { useEffect } from 'react'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
import './HomePage.css'
import useWorkoutsContext from '../hooks/useWorkoutsContext'

const HomePage = () => {
  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('http://localhost:3000/api/workouts');
      const data = await response.json();
      if (response.ok) {
        dispatch({ type: 'SET_WORKOUTS', payload: data })
        console.log(data)
      }
    }
    fetchWorkouts();
  }, [])
  return (
    <div className='home'>
      <div className="workouts">
        {workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
      <div className="workout-form">
        <WorkoutForm />
      </div>

    </div>
  )
}

export default HomePage