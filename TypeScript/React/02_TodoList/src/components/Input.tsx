import React from 'react'
import './Style.css'
const Input = () => {
  return (
    <form className='input'>
      <input type="text" placeholder='Add a task' className='input__box'/>
      <button type='submit' className='input_submit'>Add</button>
    </form>
  )
}

export default Input