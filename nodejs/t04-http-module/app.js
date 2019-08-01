var http = require('http');

var server = http.createServer(function (request, response) {
	console.log(`Request was made to ${request.url}`);
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello World!!!');
});

var socket = {ip:'localhost', port:3000};

server.listen(socket.port, socket.ip);

console.log(`Web Server running on socket ${socket.ip}:${socket.port}`);
