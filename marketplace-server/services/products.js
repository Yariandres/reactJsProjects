const express = require("express")
const fs = require("fs")

const router = express.Router()

router.get("/", (req, res) => {
  var buffer = fs.readFileSync("products.json")
  var content = buffer.toString()

  res.send(content)
})

router.get("/:id", (req, res) => {
  var buffer = fs.readFileSync("products.json")
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

router.post("/", (req, res) => {
  var newProduct = req.body
  var buffer = fs.readFileSync("products.json")
  var content = buffer.toString()
  var productsDB = JSON.parse(content)

  // SERVER GENERATED
  newProduct.id = productsDB.length + 1
  newProduct.createdAt = new Date()

  productsDB.push(newProduct)
  fs.writeFileSync("products.json", JSON.stringify(productsDB))

  res.send(productsDB)
})

module.exports = router