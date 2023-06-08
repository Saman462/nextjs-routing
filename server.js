//code to create server
const http = require("http");
const server = http.createServer(function (req, res) {
  if (req.url == "/") {
    //200=status codek
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p>Meow </p></body></html>");
    res.end();
  } else if (req.url == "/student") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p>Meow student here </p></body></html>");
    res.end();
  }
});
server.listen(5000);
console.log("hello i am running at 5000");
