import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import './SignUp.css'

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate()

  function onSubmit(data) {
    console.log("Submitting The Form Data for Signup: ", data)
  }

  function handleClick() {
    navigate('/login')
  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name: </label><br />
          <input type="text" {...register('Name', {
            required: "Name is required",
            minLength: { value: 2, message: "Minimum length is 2" },
            maxLength: { value: 20, message: "Maximum length is 20" }
          })} />
          {errors.Name && <p>{errors.Name.message}</p>}
          <br />
        </div>

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
        <input type="Submit" value={"Sign Up"} />
      </form>

      <div>
        <button onClick={handleClick}>Login</button>
      </div>
    </div>
  )
}

export default SignUp