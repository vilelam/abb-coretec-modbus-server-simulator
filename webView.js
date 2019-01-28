var express = require('express');
var app = express();
var fs = require('fs');
let logger = require('./logger/logger');

app.get('/', function (req, res) {
   var text = fs.readFileSync('./logger/error.log','utf8')
   res.send(text);
})

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   
   logger.writeLog("info", "App listening at http://%s:%s", host, port)
})