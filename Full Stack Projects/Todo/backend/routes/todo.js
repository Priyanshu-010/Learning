import express from "express";

const router = express.Router();

router.get('/todo', (req, res) => {
  res.send("todo Page")
})

export default router