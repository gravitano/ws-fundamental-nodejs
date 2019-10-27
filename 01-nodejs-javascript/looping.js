// loops through a block of code a number of times
for (let i = 0; i < 5; i++) {
  console.log("The number is " + i);
}

// loops through the properties of an object
const person = { firstName: "John", lastName: "Doe", age: 25 };
for (key in person) {
  console.log(key, person[key]);
}

// loops through the values of an iterable object
var cars = ["BMW", "Volvo", "Mini"];
for (car of cars) {
  console.log(car);
}

// loops through a block of code while a specified condition is true
let i = 0;
while (i < 10) {
  console.log("The i number is " + i);
  i++;
}

// also loops through a block of code while a specified condition is true
let j = 0;
do {
  console.log("The j number is " + j);
  j++;
} while (j < 10);
