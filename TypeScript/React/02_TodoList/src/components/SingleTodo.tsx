import React, { useEffect, useRef, useState } from 'react'
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import type { Todo } from '../models/models'
import './Style.css'

type Props = {
  todo: Todo
  key: number
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>}

  
  const SingleTodo = ({todo, todos, setTodos}: Props) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      inputRef.current?.focus();
    }, [edit])
  const handleCLick = (id: number) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, isDone: !todo.isDone} : todo))
  }

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleSubmit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(todos.map((todo) => todo.id === id ? {...todo, todo: editTodo} : todo))
    setEdit(false);
  }
  return (
    <form className='todos__single' onSubmit={(e) => handleSubmit(e, todo.id)}>

      {
        edit ?(
         <input 
          ref={inputRef}
          type="text" 
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todos__single--text"
         /> 
        ): todo.isDone ?(
            <s className="todos__single--text">{todo.todo}</s>
        ):(
          <span className="todos__single--text">{todo.todo}</span>
          )                
      }
      <div>
        <span 
          className="icon" 
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={()=> handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={()=> handleCLick(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  )
}

export default SingleTodo