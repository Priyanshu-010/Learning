import React, { useState } from 'react'
import './WorkoutForm.css'
import useWorkoutsContext from '../hooks/useWorkoutsContext'

const WorkoutForm = () => {
  const {dispatch} = useWorkoutsContext();
  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e)=>{
    e.preventDefault()
    // console.log(title, load, reps)
    const workout = {title, load, reps}
    const response = await fetch('http://localhost:3000/api/workouts', {
      method: 'POST', 
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    if(!response.ok){
      setError(data.error)
    }
    if(response.ok){
      setTitle('')
      setLoad('')
      setReps('')
      setError(null)
      console.log("New Workout added", data)
      dispatch({type: 'CREATE_WORKOUT', payload: data})
    }
  }
  return (
    <form className='create' onSubmit={handleSubmit}>
      <h3>Add a new Workout</h3>

      <label>Exercise Title: </label>
      <input 
        type="text" 
        onChange={(e)=>setTitle(e.target.value)}
        placeholder='Title'
        value={title}
      />
      <label>load (in kg): </label>
      <input  
        type="number" 
        onChange={(e)=>setLoad(e.target.value)}
        placeholder='Weights'
        value={load}
      />
      <label>Reps</label>
      <input 
        type="number" 
        onChange={(e)=>setReps(e.target.value)}
        placeholder='Reps'
        value={reps}
      />
      <button>Add Workout</button>
      {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default WorkoutForm