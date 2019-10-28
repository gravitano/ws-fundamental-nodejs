const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

const getView = () => fs.readFileSync(__dirname + "/index.html");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  const content = fs.readFileSync(__dirname + "/index.html");
  console.log(content);

  res.end(content);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
