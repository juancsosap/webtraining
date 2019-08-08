app.directive('asTitle', function () {
	return {
		template: '{{ title }}'
	};
});

app.directive('withInfo', function () {
	return {
		templateUrl: 'html/info.html'
	};
});

app.directive('withTable', function () {
	return {
		templateUrl: 'html/table.html'
	};
});

app.directive('withLoading', function ($timeout, $interval) {
	var loadingLink = function (scope, element, attr) {

		var loaded = false;

		element.html("Loading ");
		$timeout(function () {
				element.html(attr.withLoading);
				loaded = true;
			}, 2000);

		$interval(function () {
				element.html(!loaded ? element.html() + '.' : element.html());
			}, 100);

	};

	var loadingCompile = function (scope, element, attr) {

	};

	return {
		restrict: 'A',
		link: loadingLink,
	};
});
