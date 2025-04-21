import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount, reset } from "./features/counter/counterSlice"
import { useState } from "react"

function App() {
  const [amount, setAmount] = useState(0)
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  function handleIncrement(){
    dispatch(increment())
  }

  function handleDecrement(){
    dispatch(decrement())
  }

  function handleReset(){
    dispatch(reset())
  }

  function handleAmount(){
    dispatch(incrementByAmount(amount))
  }

  return (
    <div>
      <button onClick={handleIncrement}> + </button>
      <p>Count : {count}</p>
      <button onClick={handleDecrement}> - </button>
      <button onClick={handleReset}> Reset </button>
      <input 
        type="number"
        value={amount}
        placeholder="Enter amount"
        onChange={(e) => setAmount(e.target.value)}/>
      <button onClick={handleAmount}> ADD</button>
    </div>
  )
}

export default App
