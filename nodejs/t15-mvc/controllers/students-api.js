var dao = require('../utils/dao');
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();

module.exports = function (app) {

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

		var data = dao.post(input);

		response.send(data);
	});

	app.delete('/api/students/:id', function (request, response) {
		var id = request.params.id;

		var data = dao.delete(id);

		response.send(data);
	});

};
