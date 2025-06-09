import './App.css'
import useHabitStore from './store/store'

function App() {

  const habit = useHabitStore()
  console.log(habit)
  return (

    <div>
      Hello
    </div>
  )
}

export default App
