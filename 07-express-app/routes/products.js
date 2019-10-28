var express = require("express");
var router = express.Router();
const ProductService = require("../services/ProductService");

/* GET users listing. */
router.get("/", async function(req, res, next) {
  const products = await ProductService.getAll();
  res.json({
    data: products
  });
});
router.post("/", async function(req, res, next) {
  const data = req.body;
  const product = await ProductService.create(data);
  res.json({
    data: product
  });
});
router.get("/:id", async function(req, res, next) {
  const id = req.params.id;
  const product = await ProductService.findById(id);
  res.json({
    data: product
  });
});
router.put("/:id", async function(req, res, next) {
  const id = req.params.id;
  const data = req.body;
  const isUpdated = await ProductService.update(id, data);
  res.json({
    data,
    message: isUpdated ? "Product updated!" : "Product not found"
  });
});
router.delete("/:id", async function(req, res, next) {
  const id = req.params.id;
  const isDeleted = await ProductService.destroy(id);
  res.json({
    message: isDeleted ? "Product deleted!" : "Product not found"
  });
});

module.exports = router;
