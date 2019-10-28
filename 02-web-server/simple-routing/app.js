const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  let content = "";
  let file = "";

  console.log("URL", req.url);

  switch (req.url) {
    case "/":
      file = "index";
      break;
    case "/contact":
      file = "contact";
      break;
    case "/about":
      file = "about";
      break;
    default:
      res.statusCode = 404;
      file = "404";
      break;
  }

  content = fs.readFileSync(`${__dirname}/${file}.html`);

  res.end(content);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
