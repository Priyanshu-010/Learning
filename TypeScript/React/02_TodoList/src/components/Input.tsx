import React, { useRef } from 'react'
import './Style.css'

interface Props {
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>,
  handleSubmit: (e: React.FormEvent)=>void
}
// const Input = ({todo, setTodo, handleSubmit}: Props) => {

// The above one and the below one are the same

const Input: React.FC<Props> = ({todo, setTodo, handleSubmit}) => {
  const inputRef = useRef<HTMLFormElement>(null)
  return (
    <form className='input' onSubmit={(e)=>{
      handleSubmit(e)
      inputRef.current?.blur();
    }}>
      <input
        ref={inputRef} 
        type="text"
        value={todo}
        onChange={(e)=> setTodo(e.target.value)} 
        placeholder='Add a task' 
        className='input__box'
      />
      <button type='submit' className='input_submit'>Add</button>
    </form>
  )
}

export default Input