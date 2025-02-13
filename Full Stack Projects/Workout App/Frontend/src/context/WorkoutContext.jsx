import React, { createContext } from 'react'


const WorkoutsContext = createContext()
const WorkoutContextProvider = ({children}) => {
  return (
    <WorkoutsContext.Provider>
      {children}
    </WorkoutsContext.Provider>
  )
}

export default WorkoutContextProvider