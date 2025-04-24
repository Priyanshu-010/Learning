import { useState } from "react";
import useAuthContext from "./useAuthContext";

import React from 'react'

const useSignup = () => {
  const [error, setError] =useState(null)
  const [isLoading, setIsLoading] =useState(null)

  const signup = async (email, password) => {
    setIsLoading(true)
    setError(null)

    const respone = await fetch("http://localhost:3000/api/user/signup", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email, password})
      })
      const data = await respone.json()
  }
  return (
    <div>useSignup</div>
  )
}

export default useSignup