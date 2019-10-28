var hello = "Hello";
let world = "World";
const helloWorld = "Hello" + " " + world;
const myString = new String("This is a string");

var hello = "Halo";
let world = "Dunia"; // SyntaxError: Identifier 'world' has already been declared
const myString = "Ini sebuah string"; // SyntaxError: Identifier 'myString' has already been declared

console.log(hello, world, myString);
