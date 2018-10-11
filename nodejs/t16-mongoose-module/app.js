var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'ejs');

var socket = {ip:'localhost', port:3000};

app.listen(socket.port);
console.log(`Web Server running on socket ${socket.ip}:${socket.port}`);

require('./middleware')(app);

require('./controllers/home')(app);
require('./controllers/students')(app);
require('./controllers/students-api')(app);
