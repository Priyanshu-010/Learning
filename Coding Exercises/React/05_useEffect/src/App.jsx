import { useEffect, useState } from 'react'

import './App.css'
import { use } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  function handleOnChange(e) {
    setName(e.target.value)
  }

  //first -> what to do when the component mounts
  //second -> what to do when the component unmounts
  //third -> Dependency list of the useEffect

  // useEffect(() => {
  //   first
  
  //   return () => {
  //     second
  //   }
  // }, [third])
  
  //Example

  // useEffect(() => {
  //   document.title = `You clicked ${count} times`
  // })
  
  // Uncomment every variation one by one to see the effect
  //Variation 1
  //Runs on every render

  // useEffect(()=>{
  //   alert("Runs on every render")
  // })

  //Variation 2
  //only runs on the first render

  // useEffect(() => {
  //   alert("Runs on the first render")
  // }, [])    //Empty dependency list only runs on the first render

  //Variation 3
  //only runs on the first render and when the count changes

  // useEffect(()=>{
  //   alert("Count is updated")
  // }, [count])

  //Variation 4
  // Multiple dependencies

  // useEffect(()=>{
  //   alert("Dependencies have been updated")
  // }, [count, name])

  // Variation 5
  // Cleanup function

  useEffect(() => {
    alert("count is updated")

    return () => {
      alert("Count is unmounted")
    }
  }, [count])
  

  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={() => { setCount(count + 1) }}>Click to increment</button>
      <button onClick={() => { setCount(count - 1) }}>Click to decrement</button>
      <input type="text" onChange={handleOnChange} />
      <p>{name}</p>
    </div>
  )
}

export default App
