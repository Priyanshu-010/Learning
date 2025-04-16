import UserModel from "../models/user.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const signup = async (req, res)=>{
  try {
    const {name, email, password} = req.body
    const user = await UserModel.findOne({email});
    if(user){
      res.status(400).json({message: "User already exists"});
    }
    const usermodel = new UserModel({name, email, password});
    usermodel.password = await bcrypt.hash(password, 10);
    await usermodel.save();

    res.status(201).json({message: "User created successfully"});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

export const login = async (req, res)=>{
  try {
    const {email, password} = req.body
    const user = await UserModel.findOne({email});

    if(!user){
      res.status(400).json({message: "User not found"});
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    const jwtToken = await jwt.sign({email: user.email, _id: user._id}, process.env.JWT_SECRET, {expiresIn: "2d"});
    if(isPasswordValid){
      res.status(200).json({message: "Login successful", email: user.email, token: jwtToken}); 
    }
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}