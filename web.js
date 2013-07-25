var express = require('express');

var app = express.createServer(express.logger());

fs = require("fs");
buf = require("buf");

var infile = "index.html"
var in =fs.readFileSync(infile);
var html = buf.toString(in);

app.get('/', function(request, response) {
  response.send(html);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
