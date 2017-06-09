const cfenv = require('cfenv');
const express = require('express');

const appEnv = cfenv.getAppEnv();
const app = express();

// serve static files from ./public
app.use(express.static(__dirname + '/public'));

const port = appEnv.isLocal ? 3000 : appEnv.port;
const hostname = appEnv.isLocal ? '0.0.0.0' : appEnv.bind;;

// start server
app.listen(port, hostname, function() {
  console.log(`Server started on ${hostname}:${port}.`)
});
