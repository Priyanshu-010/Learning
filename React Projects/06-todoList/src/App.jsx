
import { useState } from 'react';
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const handleSubmit = (e) =>{
    e.preventDefault();
    const todo = e.target[0].value;
    const finalTodos = [...todos, todo];
    setTodos(finalTodos);
    
    console.log(todo);
  }

  const handleClick = ()=>{
    const finalTodos = todos.filter((todo, index) => index !== todos.length - 1);
    setTodos(finalTodos);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Add Task' />
        <button>Add</button>
      </form>
      <div className="todos">
        {todos.map((todo, index) => (
          <div>
            <p key={index}>{todo}</p>
            <button onClick={handleClick}>Delete</button>
          </div>
        ))}
      </div>  
    </div>
  )
}

export default App
