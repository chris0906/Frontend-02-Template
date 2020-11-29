const http = require("http");

http
  .createServer((request, response) => {
    let body = [];
    request
      .on("error", (err) => {
        console.error(err);
      })
      .on("data", (chunk) => {
        //chunk是字节码，toString后是字符串
        body.push(chunk.toString());
      })
      .on("end", () => {
        console.log(body);
        // body = Buffer.concat(body).toString();
        console.log("body:", body);
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end("Hello World");
      });
  })
  .listen(8888);

console.log("server started");
