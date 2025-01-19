import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  //We can use Navlink in place of Link it as an active class where we can style the navbar elements accordingly if active or not.
  // active?"style":"no-style"
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/" className={({isActive})=> isActive? "active-link": ""}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({isActive})=> isActive? "active-link": ""}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" className={({isActive})=> isActive? "active-link": ""}>
            Dashboard
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar