const model = require("../models");
const Product = model.Product;

module.exports = {
  getAll() {
    return Product.findAll();
  },
  create(data) {
    return Product.create(data);
  },
  findById(id) {
    return Product.findOne({ id });
  },
  update(id, data) {
    return Product.update(data, {
      where: { id }
    });
  },
  destroy(id) {
    return Product.destroy({
      where: { id }
    });
  }
};
