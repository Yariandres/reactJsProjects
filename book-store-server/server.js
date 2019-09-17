const express = require("express");
const bodyParser = require("body-parser");
const bookRouter = require("./services/books");
const cors = require("cors");

const server = express();

server.use(cors());
server.use(bodyParser.json());

server.use("/books", bookRouter);

server.listen(3450, () => {
  console.log("SERVER IS RUNNING ON 3450");
});
