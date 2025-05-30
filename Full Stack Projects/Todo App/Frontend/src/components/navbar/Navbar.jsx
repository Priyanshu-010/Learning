import React from 'react'
import './Navbar.css'
import {GiWhitebook} from 'react-icons/gi'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <a className="navbar-brand" href="#"><b><GiWhitebook/>  &nbsp; TODO</b></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>                                      
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">About Us</a>
              </li>                                      
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Signup</a>
              </li>                                      
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Login</a>
              </li>                                      
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Logout</a>
              </li>              
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"><img className='img-fluid user-png' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" /></a>
              </li>              
            </ul>            
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar