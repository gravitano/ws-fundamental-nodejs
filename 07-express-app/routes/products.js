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
router.post("/", async function(req, res, next) {
  const data = req.body;
  const product = await model.Product.create(data);
  res.json({
    data: product
  });
});
router.get("/:id", async function(req, res, next) {
  const id = req.params.id;
  const product = await model.Product.findOne({ id });
  res.json({
    data: product
  });
});
router.put("/:id", async function(req, res, next) {
  const id = req.params.id;
  const data = req.body;
  const isUpdated = await model.Product.update(data, {
    where: { id }
  });
  res.json({
    data,
    message: isUpdated ? "Product updated!" : "Product not found"
  });
});
router.delete("/:id", async function(req, res, next) {
  const id = req.params.id;
  const isDeleted = await model.Product.destroy({
    where: { id }
  });
  res.json({
    message: isDeleted ? "Product deleted!" : "Product not found"
  });
});

module.exports = router;
