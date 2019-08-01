var express = require('express');
var dao = require('./dao');

var app = express();

app.set('view engine', 'ejs');

var socket = {ip:'localhost', port:3000};

app.listen(socket.port);
console.log(`Web Server running on socket ${socket.ip}:${socket.port}`);

app.use('/', function (request, response, next) {
	console.log(request.url);
	next();
});

app.use('/resources', express.static('static'));

app.get('/', function (request, response) {
	response.render('index', {title: 'Home Page'});
});

app.get('/students', function (request, response) {
	var offset = (request.query.offset) ? request.query.offset : 0;
	var limit = (request.query.limit) ? request.query.limit : 10;
	var data = dao.get(offset, limit);
	if(data.length > 0) {
		var tdata = {title: 'Students List',
								 error: '',
								 fields: Object.keys(data[0]),
								 data: data}
		response.render('students', tdata);
	} else {
		response.render('students', {title: 'Students List', error: 'No data available'});
	}
});

app.get('/students/:id', function (request, response) {
	var id = request.params.id;
	var data = dao.getById(id);
	if(data) {
		var tdata = {title: 'Student Detail',
								 error: '',
								 data: data}
		response.render('student', tdata);
	} else {
		response.render('student', {title: 'Student Detail', error: 'ID unavailable'});
	}
});

app.get('/api/students', function (request, response) {
	var offset = (request.query.offset) ? request.query.offset : 0;
	var limit = (request.query.limit) ? request.query.limit : 10;
	var data = dao.get(offset, limit);
	response.send(data);
});

app.get('/api/students/:id', function (request, response) {
	response.send(dao.getById(request.params.id));
});
