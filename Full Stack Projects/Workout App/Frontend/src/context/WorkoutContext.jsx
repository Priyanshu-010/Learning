import React, { createContext, useReducer } from 'react'


const WorkoutsContext = createContext()
const WorkoutContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts : null
  })
  return (
    <WorkoutsContext.Provider>
      {children}
    </WorkoutsContext.Provider>
  )
}

export default WorkoutContextProvider