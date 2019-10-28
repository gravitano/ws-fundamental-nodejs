const add = (x, y) => x + x;
const subtract = (x, y) => x - y;

module.exports = {
  add: add,
  subtract: subtract
};

// es6
module.exports = {
  add, // shorthand for add: add
  subtract
};
