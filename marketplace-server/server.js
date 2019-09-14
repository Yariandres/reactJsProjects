const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const productsRouter = require("./services/products")

const server = express()
server.get("/", (req, res) => res.send("Market place server is running!"))
const port = 3550

server.use(cors())
server.use(bodyParser.json())

server.use("/products", productsRouter)

server.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})