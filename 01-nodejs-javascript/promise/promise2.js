const fs = require("fs");

const getData = filename => {
  return new Promise((resolve, reject) => {
    fs.readFile(__dirname + "/" + filename, "utf8", (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

getData("data.json")
  .then(result => {
    console.log("result", result);
    console.log(typeof result);
    return JSON.parse(result);
  })
  .then(result2 => {
    console.log("result 2", result2);
    console.log(typeof result2);
  })
  .catch(err => {
    console.log("Whoops! Something went wrong...");
    console.error(err);
  });
