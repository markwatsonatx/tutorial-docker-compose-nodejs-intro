var config = require('./config');
var express = require('express');

var app = express();

// serve static files from ./public
app.use(express.static(__dirname + '/public'));

// start server
app.listen(config.express.port, '0.0.0.0', function() {
  console.log('Server started on port ' + config.express.port + '.')
});
