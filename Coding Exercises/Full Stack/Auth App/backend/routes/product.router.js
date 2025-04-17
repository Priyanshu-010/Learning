import express, { Router } from "express";
import { ensureAuthenticated } from "../middlewares/Auth.js";

const router = express.Router();

router.get('/', ensureAuthenticated, (req, res) =>{
  res.status(200).json([
    {
      name: "Mobile",
      price: 10000
    },
    {
      name: "Laptop",
      price: 50000  
    }
  ])
})

export default router