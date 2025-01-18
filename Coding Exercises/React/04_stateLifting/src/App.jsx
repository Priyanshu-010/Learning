import { useState } from 'react'
import Card from './components/Card'

function App() {
  const [name, setName] = useState('')

  return (
    <div>
      <Card name= {name} setName={setName}/>
      <p>I am inside parent component and the value of name is {name}</p>
    </div>
  )
}

export default App
