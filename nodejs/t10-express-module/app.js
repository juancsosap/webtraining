var express = require('express');
var dao = require('./dao');

var app = express();

var socket = {ip:'localhost', port:3000};

app.listen(socket.port);
console.log(`Web Server running on socket ${socket.ip}:${socket.port}`);

app.get('/', function (request, response) {
	response.sendFile(`${__dirname}/www/index.html`);
});

app.get('/api/students', function (request, response) {
	response.send(dao.get());
});

app.get('/api/students/:id', function (request, response) {
	response.send(dao.getById(request.params.id));
});
