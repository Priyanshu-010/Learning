import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleClick(e) {
    const color = e.target.innerText
    document.body.style.backgroundColor = color
  }
  return (
    <div className='container'>
      <button onClick={handleClick} style={{backgroundColor: 'red'}}>Red</button>
      <button onClick={handleClick} style={{backgroundColor: 'green'}}>Green</button>
      <button onClick={handleClick} style={{backgroundColor: 'blue'}}>Blue</button>
      <button onClick={handleClick} style={{backgroundColor: 'yellow'}}>Yellow</button>
      <button onClick={handleClick} style={{backgroundColor: 'black'}}>Black</button>
      <button onClick={handleClick} style={{backgroundColor: 'white'}}>White</button>
    </div>
  )
}

export default App
