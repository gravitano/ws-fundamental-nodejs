var myString = "Hello World";
var myObject = {
  hello: "World"
};

console.log(myString);
console.info(myObject); // alias for console.log
console.warn("Warning!");

// Displays data as a table.
console.table([{ a: 1, b: "Y" }, { a: "Z", b: 2 }]);

// Starts a timer you can use
// to track how long an operation takes
console.time("benchmark");
for (var i = 0; i < 100; i++) {}
console.timeEnd("benchmark");

console.trace("Show me");
