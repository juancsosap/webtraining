var http = require('http');
var fs = require('fs');

var students = [{name: 'Juan', surname: 'Peña', age: 36},
                {name: 'Ana', surname: 'Perez', age: 35},
                {name: 'Sarah', surname: 'Sosa', age: 6},
                {name: 'Jadash', surname: 'Prada', age: 4}]

var server = http.createServer(function (request, response) {
	console.log(`Request was made to ${request.url}`);
	if(request.url === '/home' || request.url === '/') {
		response.writeHead(200, {'Content-Type': 'text/html'});
		var readStream = fs.createReadStream(`${__dirname}/www/index.html`, 'utf8');
		readStream.pipe(response);
	} else if (request.url === '/api') {
		response.writeHead(200, {'Content-Type': 'application/json'});
		response.end(JSON.stringify(students));
	} else {
		response.writeHead(404, {'Content-Type': 'text/html'});
		var readStream = fs.createReadStream(`${__dirname}/www/404.html`, 'utf8');
		readStream.pipe(response);
	}
});

var socket = {ip:'localhost', port:3000};

server.listen(socket.port, socket.ip);

console.log(`Web Server running on socket ${socket.ip}:${socket.port}`);
