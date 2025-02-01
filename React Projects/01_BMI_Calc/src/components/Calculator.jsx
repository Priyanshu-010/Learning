import React, { useState } from 'react'
import { set, useForm } from 'react-hook-form'
import './Calculator.css'

const Calculator = () => {


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  let [bmi, setBmi] = useState(null) //null so that we can check if bmi has been calculated or not 
  
  function calculateBMI(data) {
    const ht = parseFloat(data.height)
    const wt = parseFloat(data.weight)
    if (ht > 0 && wt > 0){
    setBmi(bmi = Math.round((wt / (ht * ht)) * 10000))
    }
  }
  
  let weight = ''

  if( bmi !== null) {
    if (bmi < 18.5) {
      weight = "Underweight"
    } else if (bmi >= 18.5 && bmi < 25) {
      weight = "Normal"
    } else if (bmi >= 25 && bmi < 30) {
      weight = "Overweight"
    } else {
      weight = "Obese"
    }
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit(calculateBMI)}>
        <div>
          <label htmlFor="">Height</label>
          <br />
          <input { ...register('height')} />
        </div>
        <br />
        <div>
          <label htmlFor="">Weight</label>
          <br />
          <input { ...register('weight')} />
        </div>
        <br />
        <input type="submit" value={"Calculate BMI"}/>    
      </form>

      <p>Your BMI is: {bmi}</p>
      <p>You are: {weight}</p>
    </div>
  )
}

export default Calculator

