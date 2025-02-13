import React, { useEffect, useState } from 'react'

const HomePage = () => {

  const [workouts, setWorkouts] = useState([])

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
          <p key={workout._id}>{workout.title}</p>
        ))}
      </div>
    </div>
  )
}

export default HomePage