import { createContext, useReducer } from 'react'
import './App.css'
import Login from './components/login/Login'
import Logout from './components/logout/Logout'

export const UserContext = createContext()
function App() {
  const initialState = { loggedIn: false }
  function reducer(state, action){
    switch (action.type) {
      case 'login':
        return { loggedIn: true }
      case 'logout':
        return { loggedIn: false }
      default:
        return state
    }
  }
  
  const [state, dispatch] = useReducer(reducer, initialState) 
  return (
    <div>
      <h1>Account Status : {state.loggedIn ? "Logged In" : "Logged Out"}</h1>
      <UserContext.Provider value={{state, dispatch}}>
        <Login />
        <Logout />
      </UserContext.Provider>
    </div>
  )
}

export default App
