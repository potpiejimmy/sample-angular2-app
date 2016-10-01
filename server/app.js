var express = require('express');
var request = require('request');

var app = express();

app.use("/", express.static("."));

app.get('/pcsc/status', function(req,res) {
    request("http://localhost:3004/status").pipe(res);
});

app.listen(3000, function () {
  console.log('Startup complete. Listening on port 3000.');
});

