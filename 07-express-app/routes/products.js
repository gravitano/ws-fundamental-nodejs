var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("Show all products");
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
