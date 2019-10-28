var express = require("express");
var router = express.Router();
const model = require("../models");

/* GET users listing. */
router.get("/", async function(req, res, next) {
  const products = await model.Product.findAll();
  res.json({
    data: products
  });
});
router.post("/", function(req, res, next) {
  res.send("Create new product");
});
router.get("/:id", function(req, res, next) {
  res.send("Get product detail");
});
router.put("/:id", function(req, res, next) {
  res.send("Update product");
});
router.delete("/:id", function(req, res, next) {
  res.send("Delete product");
});

module.exports = router;
