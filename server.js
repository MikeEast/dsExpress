var http = require('http');
var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello express');
});

var server = http.createServer(app);
server.listen(process.env.PORT, process.env.IP);

/*
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Devsum!\n'  + req.url);
}).listen(process.env.PORT, process.env.IP);
*/