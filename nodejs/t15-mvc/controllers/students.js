var dao = require('../utils/dao');
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function (app, mw) {

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

};
