function first(callback) {
  // Simulate a code delay
  setTimeout(function() {
    console.log(1);
    if (typeof callback === "function") {
      callback();
    }
  }, 500);
}

function second() {
  console.log(2);
}

// first(second);

first("hello");
first(function() {
  console.log("Called from callback");
});
