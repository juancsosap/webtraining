app.directive('cngTitle', function () {
	return {
		restrict: 'A',
		replace: true,
		template: '<span>Your Trip:</span>'
	};
});

app.directive('cngCleanButton', function () {
	return {
		restrict: 'A',
		replace: true,
		templateUrl: 'html/templates/cleanbutton.html'
	};
});

app.directive('cngCsvData', function () {
	return {
		restrict: 'A',
		link: function (scope, element, attr) {
			var obj = scope[attr.cngCsvData];
			var msg = Object.keys(obj)
											.filter((key) => !(key === '$$hashKey'))
											.reduce((msg, key) => (msg ? msg + ', ' : '') + obj[key], null);
			element.html(msg);
		}
	};
});
