import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path='/' 
              element={<HomePage />} 
            />
            <Route 
              path='/login' 
              element={<Login />} 
            />
            <Route 
              path='/signup' 
              element={<Signup />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
