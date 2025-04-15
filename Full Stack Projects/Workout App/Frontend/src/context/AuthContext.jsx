import React from 'react'
import { createContext } from 'react'
import { useReducer } from 'react'

export const AuthContext = createContext()

export const authReducer = (state, action) => {
  
}
const AuthContext = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, {
    user : null
  })
  return (
    <div>AuthContext</div>
  )
}

export default AuthContext