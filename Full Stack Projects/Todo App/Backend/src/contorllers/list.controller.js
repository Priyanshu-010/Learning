import User from '../models/user.model.js'
import List from '../models/list.model.js'
import { json } from 'express';

export const createList = async (req, res) => {
  try {
    const { title, body, email } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const list = new List({ title, body, user: existingUser });
      await list.save();
      res.status(201).json(list);
      existingUser.list.push(list);
      existingUser.save();
    }
  } catch (error) {
    console.log(error)
  }
}
export const updateList = async (req, res) => {
  try {
    const { title, body, email } = req.body;
    const existingUser = await User.findOne({ email });

    if(!existingUser){
      return res.status(404).json({messaage: "Product not found"})
    }

    if (existingUser) {
      await List.findByIdAndUpdate(req.params.id, { title, body });
      
      const updatedList = await List.findById(req.params.id);
      res.status(200).json(updatedList);
    }
  } catch (error) {
    console.log(error, json({message: "Something went wrong"}))
  }
}
export const deleteList = async (req, res) => {
  try {
    const { email } = req.body;
    const existingUser = await User.findOneAndUpdate({email},{$pull:{list: req.params.id}});
    if(existingUser){
      await List.findByIdAndDelete(req.params.id);
      res.status(200).json({message: "List deleted"})
    }
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}
export const getList = async (req, res) => {
  try {
    const list = await List.find({user: req.params.id}).sort({createdAt: -1});
    if (list.length !== 0) {
      res.status(200).json(list)
    } else {
      res.status(200).json({message: "No Task Found"})
    }
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}