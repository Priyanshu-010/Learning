import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import './ChildC.css'

const ChildC = () => {
  // const user = useContext(UserContext)
  const theme = useContext(ThemeContext);
  return (
    <div className='containerC'>
      <div style={{backgroundColor: theme.theme, fontSize: '30px', height: '200px', width: '200px', border: '1px solid black', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <button onClick={theme.handleThemeChange}>
          Change Theme
        </button>
      </div>
    </div>
  )
}

export default ChildC
// export {UserContext}