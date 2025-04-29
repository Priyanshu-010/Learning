export const getAllTodos = (req, res) => {
  res.send("all todo")
}
export const createTodo = (req, res) => {
  res.send("created todo")
}
export const updateTodo = (req, res) => {
    console.log(req.params.id)
    res.send(req.params.id)
}
export const deleteTodo = (req, res) => {
    console.log(req.params.id)
    res.send(`delete todo with id : ${req.params.id}`)
}