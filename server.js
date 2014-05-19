var http = require('http');
var hello = require("./hello");
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Devsum! This is from ' + hello.say() + ' \n'  + req.url);
}).listen(process.env.PORT, process.env.IP);