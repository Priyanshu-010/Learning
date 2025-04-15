import { use, useState } from "react";
import useAuthContext from "./useAuthContext";

import React from 'react'

const useSignup = () => {
  const [error, setError] =useState(null)
  const [isLoading, setIsLoading] =useState(null)
  return (
    <div>useSignup</div>
  )
}

export default useSignup