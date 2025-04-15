import React, { useContext } from 'react'
import { UserContext } from '../../App'

const Logout = () => {
  const user = useContext(UserContext)
  return (
    <div>
      Logout
      <button onClick={()=> user.dispatch({type:'logout'})}>Logout</button>
    </div>
  )
}

export default Logout