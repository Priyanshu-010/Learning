import { createContext, useReducer } from 'react'
import Login from './components/login/Login'
import Logout from './components/logout/Logout'
import ToggleButton from './components/ToggleButton';

export const UserContext = createContext();

function App() {
  const initialState = { LoggedIn : false}
  function reducer(state, action){
    switch(action.type){
      case 'login':
        return {LoggedIn: true}
      case 'logout':
        return {LoggedIn: false}
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>Accout Status : {state.LoggedIn ? 'Logged In' : 'Logged Out'}</h3>
    <UserContext.Provider value={{state, dispatch}}>
      <Login />
      <Logout />
    </UserContext.Provider>
    <ToggleButton />
    </div>
  )
}

export default App
