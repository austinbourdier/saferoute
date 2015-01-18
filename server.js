var http = require('http')
var express = require('express');
var app = express();

var server = http.createServer(app);
server.listen(5000);
console.log("Node server started on port 5000");

app.use('/', express.static(__dirname + '/'));

app.get('/', function(req,res) {
  res.sendfile(__dirname + '/index.html');
});
