import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function handleIncrement() {}
  function handleDecrement() {}

  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <p>Count is {count}</p>
      <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default App
