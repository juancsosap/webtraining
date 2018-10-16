app.directive('cngFail', function () {
	return function (scope, iElement, iAttrs, controller) {
		iElement.html(
			"author.name + ' ' + author.surname" + "<br />" +
			"{{ author.name + ' ' + author.surname }}" + "<br />" +
			scope.author.name + ' ' + scope.author.surname
		);
	};
});

app.directive('cngEval', function () {
	return function (scope, iElement, iAttrs, controller) {
		var book = {name: 'Some Book', author: {name: 'Pedro', surname: 'Perez'}};
		iElement.html(
			scope.$eval("author.name + ' ' + author.surname") + "<br />" +
			scope.$eval("author.name + ' ' + author.surname", book) + "<br />" +
			scope.$eval(function (scope, locals) {
				return scope.author.name + ' ' + locals.author.surname;
			}, book) + "<br />"
		);
	};
});

app.directive('cngParse', ['$parse', function ($parse) {
	return function (scope, iElement, iAttrs, controller) {
		var book = {name: 'Some Book', author: {name: 'Pedro', surname: 'Perez'}};
		var template = $parse("author.name + ' ' + author.surname");
		iElement.html(
			template(scope) + "<br />" +
			template(book) + "<br />"
		);
	};
}]);

app.directive('cngInterpolate', ['$interpolate', function ($interpolate) {
	return function (scope, iElement, iAttrs, controller) {
		var book = {name: 'Some Book', author: {name: 'Pedro', surname: 'Perez'}};
		var template = $interpolate("{{ author.name }} {{ author.surname }} <br />");
		iElement.html(
			template(scope) +
			template(book)
		);
	};
}]);
