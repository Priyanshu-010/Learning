import { createError } from "../utils/error.js";

export const register = async (req, res, next) => {
  const data = req.body;
  console.log(data)
  if(!data.email || !data.password){
    return next(createError(400, "Email and Password are required")) 
  }
  res.send("Register Page")
}

export const login = async (req, res) => {
  res.send("Login Page")
}

export const logout = async (req, res) => {
  res.send("logout Page")
}