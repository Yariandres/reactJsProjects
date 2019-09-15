const express = require("express")
const fs = require("fs")

const router = express.Router()

router.get("/", (req, res) => {
  var buffer = fs.readFileSync("./data/products.json")
  var content = buffer.toString()

  res.send(content)
})

// GET PRODUCT BY ID 
router.get("/:id", (req, res) => {
  var buffer = fs.readFileSync("./data/products.json")
  var content = buffer.toString()

  var productsID = JSON.parse(content)
  var product = productsID.find(x => x._id == req.params.id)
  if (!product)
    res.send("Cannot find product")
  else
    res.send(product)
})

// GET PRODUCT REVIEWS
router.get("/:id/reviews", (req, res) => {
  var buffer = fs.readFileSync("reviews.json")
  var content = buffer.toString()
  var reviews = JSON.parse(content)

  res.send(reviews.filter(x => x.elementId == req.params.id))
})

// POST a new product
router.post("/", (req, res) => {
  var newProduct = req.body
  buffer = fs.readFileSync("./data/products.json")
  var content = buffer.toString()
  var productsDB = JSON.parse(content)

  // SERVER GENERATED
  newProduct.id = productsDB.length + 1
  newProduct.createdAt = new Date()

  productsDB.push(newProduct)
  fs.writeFileSync("./data/products.json", JSON.stringify(productsDB))

  res.send(productsDB)
})

// delete PRODUCT
router.delete("/:id", (req, res) => {
  var buffer = fs.readFileSync("./data/products.json")
  var content = buffer.toString()
  var productsDB = JSON.parse(content)
  var newDB = productsDB.filter(x => x._id != req.params.id)

  res.send(newDB)
})

// UPDATE PRODUCT
router.put("/:id", (req, res) => {
  var buffer = fs.readFileSync("./data/products.json")
  var content = buffer.toString()
  var productsDB = JSON.parse(content)

  // Removing previous item/product
  var previviousItem = productsDB.find(x => x._id == req.params.id)
  var newDB = productsDB.filter(x => x.ID != req.params.id)
  var product = req.body
  product._id = req.params.id

  //SERVER GENERATED
  product.updatedAt = new Date()
  product.createdAt = previviousItem.createdAt

  newDB.push(product)
  fs.writeFileSync("./data/products.json", JSON.stringify(newDB))

  res.send(newDB)
})

// EXPORT ROUTER
module.exports = router