module.exports = function (app) {

	app.get('/', function (request, response) {
		var template = 'home/index';
		var title = 'Home Page';
		var tdata = {title: title};

		response.render(template, tdata);
	});

};
