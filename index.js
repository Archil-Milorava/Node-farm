const fs = require("fs");
const http = require("http");
const url = require("url");


const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("response from overview");
  } else if (pathName === "/product") {
    res.end("response from product");
  } else if (pathName === "/api") {
    res.writeHead(200, {"Content-type" : "application/json"});
    res.end(data);
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
    });
    res.end("<h1>page not found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening request on port 8000");
});
