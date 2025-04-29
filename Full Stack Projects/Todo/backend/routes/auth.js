import express from "express";

const router = express.Router();

router.post('/login', (req, res) => {
  res.send("Login Page")
})
router.post('/register', (req, res) => {
  res.send("register Page")
})
router.post('/logout', (req, res) => {
  res.send("logout Page")
})

export default router