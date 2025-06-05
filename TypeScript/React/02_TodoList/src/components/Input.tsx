import React from 'react'
import './Style.css'

interface Props {
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>
}
const Input = ({todo, setTodo}: Props) => {
  return (
    <form className='input'>
      <input 
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