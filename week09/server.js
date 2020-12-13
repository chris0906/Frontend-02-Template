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
        // body = Buffer.concat(body).toString();
        console.log("body:", body);
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(
          `<html maaa=a>
<head>
  <style>
body div #myid{
  width: 100px;
  background-color: #ff5000;
}
body div img{
  width: 30px;
  background-color: #ff51111;
}
  </style>
</head>
<body>
  <div>
    <img id="myid" />
    <img />
  </div>
</body>
</html>`
        );
      });
  })
  .listen(8888);

console.log("server started");
