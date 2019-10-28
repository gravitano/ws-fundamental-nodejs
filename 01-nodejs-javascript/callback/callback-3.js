function first(callback) {
  // Simulate a code delay
  setTimeout(function() {
    console.log(1);
    callback();
  }, 500);
}

function second() {
  console.log(2);
}

first(second);

// first("hello");
