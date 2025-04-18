import { createContext, useReducer } from 'react'
import Login from './components/login/Login'
import Logout from './components/logout/Logout'

export const UserContext = createContext();

function App() {
  const initialState = false
  function reducer(state, action) {
    switch(action.type){
      case 'login':
        return{LoggedIn:true}
      case 'logout':
        return{LoggedIn:false}
      default:
        return state
    }

  }
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h3>Account Status : {state.LoggedIn ? "Logged In" : "Logged Out"}</h3>
      <UserContext.Provider value={{state, dispatch}}>
        <Login />
        <Logout />
      </UserContext.Provider>
    </div>
  )
}

export default App
