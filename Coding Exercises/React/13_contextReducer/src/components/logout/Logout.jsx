import React, { useContext } from 'react'
import { UserContext } from '../../App'

const logout = () => {
  const user = useContext(UserContext)
  return (
    <div>
      Logout Component
      <button onClick={() =>user.dispatch({type : 'logout'})}>Logout</button>
    </div>
  )
}

export default logout