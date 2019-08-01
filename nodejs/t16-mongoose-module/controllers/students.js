var dao = require('../utils/dao');
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function (app) {

	app.get('/students/list', function (request, response) {
		var offset = (request.query.offset) ? parseInt(request.query.offset) : 0;
		var limit = (request.query.limit) ? parseInt(request.query.limit) : 10;

		dao.get(offset, limit, function (data) {
			var template = 'students/list';
			var title = 'Students List';
			var fields = ['_id', 'name', 'surname', 'age'];
			console.log(Object.keys(data[0]));
			var tdata = (data.length > 0) ? {title: title, error: '', fields: fields, data: data}
																		: {title: title, error: 'No data available'};

			response.render(template, tdata);
		});
	});

	app.get('/students/details/:id', function (request, response) {
		var id = request.params.id;

		dao.getById(id, function (data) {
			var template = 'students/detail';
			var title = 'Student Detail';
			var tdata = (data) ? {title: title, error: '', data: data}
												 : {title: title, error: 'ID unavailable'};

			response.render(template, tdata);
		});
	});

	app.get('/students/create', function (request, response) {
		var template = 'students/create';
		var title = 'Student Creation';
		var tdata = {title: title};

		response.render(template, tdata);
	});

	app.post('/students/create', urlencodedParser, function (request, response) {
		var input = request.body;

		dao.post(input, function (data) {
			var template = 'students/detail';
			var title = 'Student Detail';
			var tdata = (data) ? {title: title, error: '', data: data}
												 : {title: title, error: 'ID unavailable'};

			response.render(template, tdata);
		});
	});

};
