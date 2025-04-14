import React, { useContext } from 'react'
import { UserContext } from '../../App'

const login = () => {
  const user = useContext(UserContext)
  return (
    <div>
      Login Componet
      <button onClick={() => user.dispatch({type : 'login'})}>Login</button>
    </div>
  )
}

export default login