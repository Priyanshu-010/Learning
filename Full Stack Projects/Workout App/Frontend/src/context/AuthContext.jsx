import React from 'react'
import { createContext } from 'react'
import { useReducer } from 'react'

export const AuthContext = createContext()

export const authReducer = (state, action) => {
  switch (action.type){
    case 'LOGIN':
      return{
        user: action.payload
      }
    case 'LOGOUT':
      return{
        user: null
      }
    default:
      return state
  }
}
const AuthContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, {
    user : null
  })
  console.log('AuthContext State', state)
  return (
    <div>
      <AuthContext.Provider value = {{...state, dispatch}}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthContextProvider