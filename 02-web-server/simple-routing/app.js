const http = require("http");
const fs = require("fs");
const { getRoute } = require("./router");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  console.log("URL", req.url);

  const route = getRoute(req, res);
  const content = fs.readFileSync(`${__dirname}/${route}.html`);

  res.end(content);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
