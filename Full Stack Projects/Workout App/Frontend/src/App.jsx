import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
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
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
