import React, { createContext, useState } from 'react'
import ChildA from './components/ChildA'

// const UserContext = createContext();  // Create This outside of the scope of the function so it can be exported
const ThemeContext = createContext();

function App() {
  // Step 1 : Create Context
  // Step 2 : Wrap all the child inside a provider who wants to use the context or become consumer
  // Pass value
  // const [user, setUser] = useState({name: 'Priyanshu'});

  //2nd Example 

  const [theme, setTheme] = useState('beige');
  function handleThemeChange() {
    if(theme === 'beige'){
      setTheme('black');
    }else{
      setTheme('beige');
    }
  }

  return (
    <div>
      <ThemeContext.Provider value={{theme, handleThemeChange}}>
        <ChildA />
      </ThemeContext.Provider>


      {/* <UserContext.Provider value={user}>
        <ChildA />
      </UserContext.Provider> */}
    </div>
  )
}

export default App
// export {UserContext} 
export {ThemeContext} 
