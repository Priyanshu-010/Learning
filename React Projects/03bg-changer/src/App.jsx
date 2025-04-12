import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('white')

  return (
    <div className='container' style={{backgroundColor: color, width: '100%', height: '100vh'}}>
      <button onClick={()=> setColor('red')} style={{backgroundColor: 'red'}}>Red</button>
      <button onClick={()=> setColor('green')} style={{backgroundColor: 'green'}}>Green</button>
      <button onClick={()=> setColor('blue')} style={{backgroundColor: 'blue'}}>Blue</button>
      <button onClick={()=> setColor('yellow')} style={{backgroundColor: 'yellow'}}>Yellow</button>
      <button onClick={()=> setColor('black')} style={{backgroundColor: 'black'}}>Black</button>
      <button onClick={()=> setColor('white')} style={{backgroundColor: 'white'}}>White</button>
    </div>
  )
}

export default App
