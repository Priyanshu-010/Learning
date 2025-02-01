import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import './Login.css'



const Login = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate()

  function onSubmit(data) {
    console.log("Submitting Form Data for Login: ", data)
  }

  function handleClick() {
    navigate('/')
  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email: </label><br />
          <input type="email" {...register('Email', {
            required: "Email is required",
            pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" }
          })} />
          {errors.Email && <p>{errors.Email.message}</p>}
          <br />
        </div>

        <div>
          <label>Password: </label><br />
          <input type="password" {...register('Password', {
            required: "Password is required",
            minLength: { value: 6, message: "Minimum length is 6" }
          })} />
          {errors.Password && <p>{errors.Password.message}</p>}
          <br />
        </div>
        <br />
        <input type="Submit" value={"Login"} />
      </form>

      <div>
        <button onClick={handleClick}>Sign Up</button>
      </div>
    </div>
  )
}

export default Login