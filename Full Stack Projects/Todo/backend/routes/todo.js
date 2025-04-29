import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
  res.send("all todo")
})
router.post('/', (req, res) => {
  res.send("created todo")
})
router.put('/:id', (req, res) => {
  console.log(req.params.id)
  res.send(req.params.id)
})
router.delete('/:id', (req, res) => {
  console.log(req.params.id)
  res.send(`delete todo with id : ${req.params.id}`)
})

export default router