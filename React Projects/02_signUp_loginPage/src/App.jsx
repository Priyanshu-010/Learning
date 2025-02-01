import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from './components/SignUp/SignUp'
import Login from './components/Login/Login'
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignUp />
  },
  {
    path: '/login',
    element: <Login />
  }
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
