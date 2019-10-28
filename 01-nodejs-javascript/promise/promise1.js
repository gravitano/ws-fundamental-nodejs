const fs = require("fs");

// contoh promise untuk async
const promiseAsync = new Promise((resolve, reject) => {
  fs.readFile(__dirname + "/hello.txt", "utf8", (err, res) => {
    if (err) reject(err);
    resolve(res);
  });
});

promiseAsync
  .then(res => console.log("Hasil Async: ", res))
  .catch(err => console.log("error", err));

// contoh promise untuk sync
const promiseSync = new Promise(resolve => {
  resolve("Hello Sync");
});

promiseSync.then(res => console.log("Hasil Sync: ", res));
