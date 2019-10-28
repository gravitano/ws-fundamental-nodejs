async function firstAsync() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Now it's done!"), 500);
  });

  // wait until the promise returns us a value
  let result = await promise;

  // "Now it's done!"
  console.log("result:", result);
}

firstAsync();
