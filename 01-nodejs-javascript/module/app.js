const math = require("./math");
// es6
const { add, subtract } = require("./math");

console.log(math.add(10, 2)); // 20
console.log(math.subtract(10, 2)); // 8

console.log(add(10, 2)); // 20
console.log(subtract(10, 2)); // 8
