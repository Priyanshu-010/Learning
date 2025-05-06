import express from "express"
import { connectdb } from "./utils/connection.js";
import router from "./route/book.route.js"

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/books", router)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
  connectdb()
})