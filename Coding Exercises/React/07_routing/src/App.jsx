import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Params from './components/Params';
import Courses from './components/Courses';
import Reports from './components/Reports';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>
      <Navbar />
      <Home />
    </div>
  },
  {
    path: '/about',
    element: <div>
      <Navbar />
      <About />
    </div>
  },
  {
    path: '/dashboard',
    element: <div>
      <Navbar />
      <Dashboard />
    </div>,
    children: [
      {
        path: 'courses',
        element : <Courses />
      },
      {
        path: 'reports',
        element : <Reports />
      }
    ]
  },
  {
    path: '/students/:id',
    element: <div>
      <Navbar />
      <Params />
    </div>
  },
  {
    path: '*',
    element: <div>
      <h1>404 Page Not Found</h1>
    </div>
  }
])
function App() {


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
