import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { handleError } from '../utils'

const Signup = () => {
  const [signupInfo, setSignupInfo] = useState({
    name: '',
    email: '',
    password: ''
  })
  function handleChange(e) {
    const { name, value } = e.target
    console.log(name, value)
    const copySignupInfo= { ...signupInfo}
    copySignupInfo[name] = value
    setSignupInfo(copySignupInfo)
  }
  console.log("SignupInfo", signupInfo)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const {name, email, password} = signupInfo
    if(!name || !email || !password){
      return handleError("All fields are required")
    }
    try {
      const url = "http://localhost:3000/auth/signup"
      const response = fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(signupInfo)
      })

      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }
      console.log("Success",data)
    } catch (error) {
      handleError(error.message)
    }
  }
  return (
    <div className='container'>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          onChange={handleChange}
          type="text"
          name='name'
          autoFocus
          placeholder='Enter your name'
          value={signupInfo.name}
        />
        <label htmlFor="email">Email</label>
        <input
          onChange={handleChange}
          type="email"
          name='email'
          placeholder='Enter your email'
          value={signupInfo.email}
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={handleChange}
          type="password"
          name='password'
          placeholder='Enter your password'
          value={signupInfo.password}
        />
        <button type='submit'>Signup</button>
        <span>Already have an account?
          <Link to="/login">Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Signup