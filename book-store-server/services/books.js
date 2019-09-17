const express = require("express");
const fs = require("fs-extra");
const shortid = require("shortid");

// HELPERS METHODS
// GETS
getBooks = async () => {
  var buffer = await fs.readFile("books.json");
  var items = buffer.toString();
  return JSON.parse(items);
}
// SAVES
saveBooks = async (books) => {
  await fs.writeFile("books.json", books);
}

const router = express.Router();

router.get("/", async (req, res) => {
  var books = await getBooks();
  console.log(req.query)
  for (let entry in req.query) {
    console.log(entry)
    var queryValue = req.query[entry].toLowerCase ? req.query[entry].toLowerCase() : req.query[entry];
    books = books.filter(x => x[entry].toLowerCase ? x[entry].toLowerCase().indexOf(queryValue) >= 0 : x[entry] == queryValue)
  }
  res.send(books);
});

router.get("/:id", async (req, res) => {
  var books = await getBooks()
  res.send(books.find(x => x.asin == req.params.id))
})

router.post("/", async (req, res) => {
  var books = await getBooks()
  if (!req.body.asin)
    req.body.asin = shortid.generate()

  books.push(req.body);
  await saveBooks(books)
})

router.put("/:id", async (req, res) => {
  var books = await getBooks();
  var book = books.find(x => x.asin == req.params.id);

  Object.assign(book, req.body);
  await saveBooks(books)
})

router.delete("/:id", async (req, res) => {
  var books = await getBooks();
  var bookWithOutSpecifiedID = books.filter(x => x.asin != req.params.id);
  await saveBooks(bookWithOutSpecifiedID);
})

module.exports = router;