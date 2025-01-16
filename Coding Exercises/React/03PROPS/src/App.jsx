import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/button/Button'

function App() {
  const [count, setCount] = useState(0)

  function handleClick(){
    setCount(count + 1)
  }
  return (
    <div>
      <Button text="Click Me" handleClick={handleClick}>
        <h1>Count is {count}</h1> 
      </Button>
    </div>
  )
}

export default App
