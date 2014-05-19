var http = require('http');
var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('<h1>Hello express</h1>');
});

app.get('/users', function(req, res) {
    res.set("Content-Type", "application/json;charset=utf-8");
    res.send({ name: "Mikael Östberg", age: 37 });
});

var server = http.createServer(app);
server.listen(process.env.PORT, process.env.IP);

/*
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Devsum!\n'  + req.url);
}).listen(process.env.PORT, process.env.IP);
*/