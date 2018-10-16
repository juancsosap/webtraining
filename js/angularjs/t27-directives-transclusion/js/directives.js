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

app.directive('cngMessage1', function () {
	return {
		templateUrl: 'html/message1.html',
		scope: { msg: '@cngMessage1' },
	};
});

app.directive('cngMessage2', function () {
	return {
		templateUrl: 'html/message2.html',
		scope: { msg: '@cngMessage2' },
		transclude: true
	};
});

app.directive('cngMessage3', function () {
	return {
		templateUrl: 'html/message1.html',
		scope: { msg: '@cngMessage3' },
		transclude: true,
		link: function (scope, iElement, iAttrs, controller, transclude) {
			transclude(function (clone) {
				iElement.append(clone);
			});
		}
	};
});

app.directive('cngMessage4', function () {
	return {
		templateUrl: 'html/message1.html',
		scope: { msg: '@cngMessage4' },
		transclude: true,
		controller: function ($scope, $element, $attrs, $transclude) {
			$transclude(function (clone) {
				$element.append(clone);
			});
		}
	};
});

app.directive('cngMessage5', function () {
	return {
		templateUrl: 'html/message5.html',
		scope: { msg: '@cngMessage5' },
		transclude: true,
	};
});

app.directive('cngTransclude', function () {
	return {
		link: function (scope, iElement, iAttrs, controller, transclude) {
			iElement.append(transclude());
		}
	};
});

app.directive('cngMessage6', function () {
	return {
		templateUrl: 'html/message1.html',
		scope: { msg: '@cngMessage6' },
		transclude: true,
		controller: function ($scope, $element, $attrs, $transclude) {
			$element.append($transclude());
			//$element.append($transclude());
		}
	};
});

app.directive('cngMessage7', function () {
	return {
		templateUrl: 'html/message1.html',
		scope: { msg: '@cngMessage7' },
		transclude: true,
		controller: function ($scope, $element, $attrs, $transclude) {
			$transclude((clone) => $element.append(clone));
			$transclude((clone) => $element.append(clone));
		}
	};
});

app.directive('cngMessage8', function () {
	return {
		templateUrl: 'html/message1.html',
		scope: { msg: '@cngMessage8' },
		transclude: true,
		controller: function ($scope, $element, $attrs, $transclude) {
			$transclude(function (clone, $transScope) {
				$transScope.msg = 'This is the transclude Message 8';
				$element.append(clone);
			});
		}
	};
});

app.directive('cngMessage9', function () {
	return {
		templateUrl: 'html/message1.html',
		scope: { msg: '@cngMessage9' },
		transclude: true,
		controller: function ($scope, $element, $attrs, $transclude) {
			var transScope = $scope.$new(true);
			transScope.msg = 'This is the transclude Message 9';
			$transclude(transScope, function (clone) {
				$element.append(clone);
			});
		}
	};
});
