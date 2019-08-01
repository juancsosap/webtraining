var express = require('express');

module.exports = function (app) {

	app.use('/', function (request, response, next) {
		console.log(request.url);
		next();
	});

	app.use('/resources', express.static('static'));

};
