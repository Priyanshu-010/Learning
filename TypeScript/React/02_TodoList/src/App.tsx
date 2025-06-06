import type React from 'react'
import './App.css'
import Input from './components/Input'
import { useState } from 'react'
import type { Todo } from './models/models'
import TodoList from './components/TodoList'

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
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App
