import React from 'react'
import type { Todo } from '../models/models'
import SingleTodo from './SingleTodo'
import './Style.css'

interface Props{
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList: React.FC<Props> = ({todos, setTodos}) => {
  return (
    <div className='todos'>
      {todos.map((todo) => (
        <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>
      ))}
    </div>
  )
}

export default TodoList