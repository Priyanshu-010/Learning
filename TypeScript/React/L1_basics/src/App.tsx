import './App.css'
import Box from './components/Box'

function App() {
  return (
    <div>
      <Box heading={"Hello World"} count={5}>
        <p>This is a paragraph</p>
        <button>Click me</button>
      </Box>
    </div>
  )
}

export default App
