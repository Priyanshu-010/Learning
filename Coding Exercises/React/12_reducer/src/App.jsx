import { useReducer, useState } from 'react'

import './App.css'

function App() {
  const [count, dispatch] = useReducer(reducer, 0);
  function reducer(state, action) {
    if (action.type === 'increment') {
      return state + 1
    }
    if (action.type === 'decrement') {
      return state - 1
    }
    console.log(state)
  }

  return (
    <div>
      <h1>hello</h1>
      <p>Count is {count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  )
}

export default App
