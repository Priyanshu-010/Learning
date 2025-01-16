import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function handleClick() {
    setCount(count + 1)
  }

  function handleClickDec() {
    setCount(count - 1)
  }
  return (
    <div>
      <h1>Count is {count}</h1> 
      <button onClick={handleClick}>Click to increment</button>
      <button onClick={handleClickDec}>Click to decrement</button>
    </div>
  )
}

export default App
