app.directive('cngAsTitle', function () {
	return {
		template: '{{ title }}'
	};
});

app.directive('cngWithInfo', function () {
	return {
		templateUrl: 'html/info.html',
		replace: true
	};
});

app.directive('cngWithTable', function () {
	var controller = function ($scope, $element, $attrs) {
		$scope.cngTable = {
			header: $scope[$attrs.cngTableName],
			fields: $scope[$attrs.cngTableFields],
			data: $scope[$attrs.cngTableData]
		};
	};

	return {
		controller: controller,
		scope: true,
		templateUrl: 'html/table.html'
	};
});

app.directive('cngWithLoading', function ($timeout, $interval) {
	var post = function (scope, iElement, iAttrs) {

		var loaded = false;

		iElement.html("Loading ");
		$timeout(function () {
				iElement.html(iAttrs.cngWithLoading);
				loaded = true;
			}, 2000);

		$interval(function () {
				iElement.html(!loaded ? iElement.html() + '.' : iElement.html());
			}, 100);

	};

	return {
		restrict: 'A',
		link: post
	};
});

app.directive('cngConcatData', function () {

	var post = function (scope, iElement, iAttrs) {
		var obj = scope[iAttrs.cngConcatData];
		var msg = Object.keys(obj)
										.filter((key) => !(key === '$$hashKey'))
										.reduce((msg, key) => (msg ? msg + ' ' : '') + obj[key], null);
		iElement.html(msg);
	};

	return {
		restrict: 'A',
		link: {
			post: post
		}
	};

});

app.directive('cngTestDirectives', ['$interpolate', function ($interpolate) {
	return {
		restrict: 'E',
		compile: (tElement, tAttrs) => {
			console.log(tAttrs.text + ' - COMPILE');

			return {
				pre: (scope, iElement, iAttrs, controller) => console.log(iAttrs.text + ' - PRE'),
				post: (scope, iElement, iAttrs, controller) => console.log(iAttrs.text + ' - POST')
			};
		},
		controller: ($scope, $element, $attrs) => {
			var value = $interpolate($attrs.text)($scope);
			console.log('[' + $attrs.text + ']:[' + value + '] - CONTROLLER');
		}
	};
}]);
