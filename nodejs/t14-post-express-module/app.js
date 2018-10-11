var express = require('express');
var bodyParser = require('body-parser');
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

var urlencodedParser = bodyParser.urlencoded({extended: false});
var jsonParser = bodyParser.json();

app.get('/', function (request, response) {
	var template = 'index';
	var title = 'Home Page';
	var tdata = {title: title};

	response.render(template, tdata);
});

app.get('/students/list', function (request, response) {
	var offset = (request.query.offset) ? request.query.offset : 0;
	var limit = (request.query.limit) ? request.query.limit : 10;

	var data = dao.get(offset, limit);

	var template = 'students/list';
	var title = 'Students List';
	var tdata = (data.length > 0) ? {title: title, error: '', fields: Object.keys(data[0]), data: data}
																: {title: title, error: 'No data available'};

	response.render(template, tdata);
});

app.get('/students/details/:id', function (request, response) {
	var id = request.params.id;

	var data = dao.getById(id);

	var template = 'students/detail';
	var title = 'Student Detail';
	var tdata = (data) ? {title: title, error: '', data: data}
										 : {title: title, error: 'ID unavailable'};

	response.render(template, tdata);
});

app.get('/students/create', function (request, response) {
	var template = 'students/create';
	var title = 'Student Creation';
	var tdata = {title: title};

	response.render(template, tdata);
});

app.post('/students/create', urlencodedParser, function (request, response) {
	var input = request.body;

	var data = dao.post(input);

	var template = 'students/detail';
	var title = 'Student Detail';
	var tdata = (data) ? {title: title, error: '', data: data}
										 : {title: title, error: 'ID unavailable'};

	response.render(template, tdata);
});

app.get('/api/students', function (request, response) {
	var offset = (request.query.offset) ? request.query.offset : 0;
	var limit = (request.query.limit) ? request.query.limit : 10;

	var data = dao.get(offset, limit);

	response.send(data);
});

app.get('/api/students/:id', function (request, response) {
	var id = request.params.id;

	var data = dao.getById(id);

	response.send(data);
});

app.post('/api/students', jsonParser, function (request, response) {
	var input = request.body;
	console.log(input);

	var data = dao.post(input);

	response.send(data);
});
