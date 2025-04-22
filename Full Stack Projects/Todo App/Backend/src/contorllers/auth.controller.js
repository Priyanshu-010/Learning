import User from '../models/user.model.js'
import bcrypt from 'bcrypt'

export const registerUser = async (req, res) =>{
  try {
    const {email, username, password} = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)
    const user = new User({email, username, password: hashedPassword})
    await user.save().then(() =>{
      res.status(201).json({user : user})
    })
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}
export const loginUser = async (req, res) =>{
  try {
    const {email} = req.body
    const user = await User.findOne({email});
    if(!user){
      return res.status(404).json({message: "User not found"})
    }

    const isPasswordValid = await bcrypt.compare(req.body.password, user.password)
    if(!isPasswordValid){
      return res.status(401).json({message: "Invalid credentials"})
    }

    const { password, ...others} = user._doc  
    // Explanation of this line is from the document or the the {}object of the user in mongo db removing passwrod give everything else so that the password is not sent

    res.status(200).json({others})
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}