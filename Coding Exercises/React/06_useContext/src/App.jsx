import React, { createContext, useState } from 'react'
import ChildA from './components/ChildA'

const UserContext = createContext();// Create This outside of the scope of the function so it can be exported
function App() {
  // Step 1 : Create Context
  // Step 2 : Wrap all the child inside a provider who wants to use the context or become consumer
  // Pass value
  const [user, setUser] = useState({name: 'Priyanshu'});
  return (
    <div>
      <UserContext.Provider value={user}>
        <ChildA />
      </UserContext.Provider>
    </div>
  )
}

export default App
export {UserContext}  
