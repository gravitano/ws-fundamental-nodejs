const express = require("express");
const app = express();
const port = 3000;

const myLogger = function(req, res, next) {
  console.log("LOGGED");
  next();
};

const requestTime = function(req, res, next) {
  req.requestTime = Date.now();
  next();
};

app.use(myLogger);
app.use(requestTime);
// application-level middleware
app.use(function(req, res, next) {
  console.log("Time:", Date.now());
  next();
});
// error handling middleware
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.get("/home", function(req, res) {
  var responseText = "Hello World!<br>";
  responseText += "<small>Requested at: " + req.requestTime + "</small>";
  res.send(responseText);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  res.send("Got a POST request");
});

app.put("/user", (req, res) => {
  res.send("Got a PUT request at /user");
});

app.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
