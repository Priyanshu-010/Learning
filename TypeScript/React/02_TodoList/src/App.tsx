import type React from 'react'
import './App.css'
import Input from './components/Input'
import { useState } from 'react'
import type { Todo } from './models/models'

const App:React.FC = ()=> {

  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] =useState<Todo[]>([]);
  
  const handleSubmit = (e: React.FormEvent)=>{
    e.preventDefault();
    if(todo){
      setTodos([...todos, {id: Date.now(), todo, isDone: false}])
      setTodo("")
    }
  }
  console.log(todos)

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <Input todo={todo} setTodo={setTodo} handleSubmit={handleSubmit}/>
      {todos.map((todo)=>(
        <div className="todo" key={todo.id}>
          <p>{todo.todo}</p>
        </div>
      ))}
    </div>
  )
}

export default App
