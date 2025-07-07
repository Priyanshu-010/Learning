import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <h1>Counter</h1>
      <h3>Count : {count}</h3>
      <button onClick={()=> setCount(count+1)}>+</button>
      <button onClick={()=> setCount(count-1)}>-</button>
      <input type="text" onChange={(e) => setCount(Number(e.target.value))} />
    </div>
  )
}

export default App
