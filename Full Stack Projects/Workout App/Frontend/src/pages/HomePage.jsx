import React, { useEffect, useState } from 'react'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
import './HomePage.css'

const HomePage = () => {

  const [workouts, setWorkouts] = useState(null)

  useEffect(()=>{
    const fetchWorkouts = async ()=>{
      const response = await fetch('http://localhost:3000/api/workouts');
      const data = await response.json();
      if(response.ok){
        setWorkouts(data);
        console.log(data)
      }
    }
    fetchWorkouts();
  },[])
  return (
    <div className='home'>
      <div className="workouts">
        {workouts && workouts.map((workout)=>(
          <WorkoutDetails key={workout._id} workout= {workout}/>
        ))}
      </div>
      <WorkoutForm />
    </div>
  )
}

export default HomePage