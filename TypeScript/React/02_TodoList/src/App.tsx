import type React from 'react'
import './App.css'
import Input from './components/Input'
import { useState } from 'react'

const App:React.FC = ()=> {

  const [todo, setTodo] = useState<string>('');
  console.log(todo)

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <Input todo={todo} setTodo={setTodo}/>
    </div>
  )
}

export default App
