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
  console.log(id);
  await model.Product.update(data, {
    where: { id }
  });
  res.json({
    data
  });
});
router.delete("/:id", function(req, res, next) {
  res.send("Delete product");
});

module.exports = router;
