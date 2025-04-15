import React, { useContext } from 'react'
import { UserContext } from '../../App'

const Login = () => {
  const user = useContext(UserContext)
  return (
    <div>
      Login
      <button onClick={()=> user.dispatch({type:'login'})}>Login</button>
    </div>
  )
}

export default Login