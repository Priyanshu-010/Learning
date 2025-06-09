import './App.css'
import useCountStore from './store/store'

function App() {
  const count: number = useCountStore((state) => state.count);
  const increment = useCountStore((state) => state.increment);
  const decrement = useCountStore((state) => state.decrement)
  const addByValue = useCountStore((state) => state.addByValue);

  const handleSubmit = (e: React.FormEvent)=>{
    e.preventDefault();
    addByValue(Number(e.currentTarget[0].value))
    e.currentTarget[0].value = '';
  }
  return (

    <div>
      {count}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <form onSubmit={handleSubmit}>
        <input type="number" />
      </form>
    </div>
  )
}

export default App
