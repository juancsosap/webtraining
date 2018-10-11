var dao = require('../utils/dao');
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();

module.exports = function (app) {

	app.get('/api/students', function (request, response) {
		var offset = (request.query.offset) ? parseInt(request.query.offset) : 0;
		var limit = (request.query.limit) ? parseInt(request.query.limit) : 10;

		dao.get(offset, limit, function (data) {
			response.send(data);
		});
	});

	app.get('/api/students/:id', function (request, response) {
		var id = request.params.id;

		dao.getById(id, function (data) {
			response.send(data);
		});
	});

	app.post('/api/students', jsonParser, function (request, response) {
		var input = request.body;

		dao.post(input, function (data) {
			response.send(data);
		});
	});

	app.delete('/api/students/:id', function (request, response) {
		var id = request.params.id;

		var data = dao.delete(id, function (data) {
			response.send(data);
		});
	});

};
