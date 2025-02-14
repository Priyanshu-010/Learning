import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";

import React from 'react'

const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext)

  if(!context) {
    throw Error('useWorkoutContext must be used inside a WorkoutsContextProvider')
  }
  return context
}

export default useWorkoutsContext