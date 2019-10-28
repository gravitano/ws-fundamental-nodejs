const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  let content = fs.readFileSync(__dirname + "/index.html");

  console.log("URL", req.url);

  switch (req.url) {
    case "/":
      content = fs.readFileSync(__dirname + "/index.html");
      break;
    case "/contact":
      content = fs.readFileSync(__dirname + "/contact.html");
      break;
    case "/about":
      content = fs.readFileSync(__dirname + "/about.html");
      break;
    default:
      res.statusCode = 404;
      content = fs.readFileSync(__dirname + "/404.html");
      break;
  }

  res.end(content);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
