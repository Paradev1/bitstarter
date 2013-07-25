var express = require('express');

var app = express.createServer(express.logger());

fs = require('fs');
buf = new Buffer(256);

var infile = 'index.html';
var in1 = fs.readFileSync(infile);

var buf = new Buffer(in1,'utf-8');

var html = buf.toString();

app.get('/', function(request, response) {
  response.send(html);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
