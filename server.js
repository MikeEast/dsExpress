var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Devsum!\n' + req.url);
}).listen(process.env.PORT, process.env.IP);