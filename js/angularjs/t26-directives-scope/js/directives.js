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
		template: 'D01: <span>{{ msg }}</span>',
		controller: function ($scope, $element, $attrs) {
			$scope.msg = $attrs.cngMessage1;
		}
	};
});

app.directive('cngMessage2', function () {
	return {
		template: 'D02: <span>{{ msg }}</span>',
		scope: true,
		controller: function ($scope, $element, $attrs) {
			$scope.msg = $attrs.cngMessage2;
		}
	};
});

app.directive('cngMessage3', function () {
	return {
		template: 'D03: <span>{{ msg }}</span>',
		scope: {
			msg: '@'
		}
	};
});

app.directive('cngMessage4', function () {
	return {
		template: 'D04: <span>{{ msg }}</span>',
		scope: {
			msg: '@message'
		}
	};
});

app.directive('cngMessage5', function () {
	return {
		template: 'D05: <button ng-click="clicked()">{{ msg }}</button>',
		scope: {
			msg: '@message'
		},
		controller: function ($scope, $element, $attrs) {
			$scope.clicked = function () {
				alert($scope.msg);
			};
		}
	};
});

app.directive('cngMessage6', function () {
	return {
		template: 'D06: <span>{{ obj.msg }} - Same Name</span>',
		scope: {
			obj: '='
		}
	};
});

app.directive('cngMessage7', function () {
	return {
		template: 'D07: <span>{{ obj.msg }} - Different Name</span>',
		scope: {
			obj: '=message'
		}
	};
});

app.directive('cngMessage8', function () {
	return {
		template: 'D08: <button ng-click="func()()">Isolated Scope - & Function Communication - Same Name</button>',
		scope: {
			func: '&'
		}
	};
});

app.directive('cngMessage9', function () {
	return {
		template: 'D09: <button ng-click="func()()">Isolated Scope - & Function Communication - Different Name</button>',
		scope: {
			func: '&message'
		}
	};
});

app.directive('cngMessage10', function () {
	return {
		template: 'D10: <button ng-click="func({msg:\'Message 3\'})">Isolated Scope - & Function Communication - Different Name</button>',
		scope: {
			func: '&message'
		}
	};
});

app.directive('cngMessage11', function () {
	return {
		template: 'D11: <button ng-click="clicked()">Isolated Scope - & Function Communication - Different Name</button>',
		scope: {
			func: '&message'
		},
		controller: function ($scope, $element, $attrs) {
			$scope.clicked = () => $scope.func({msg:'Message 4'});
		}
	};
});

app.directive('cngMessage12', function () {
	return {
		template: 'D12: <button ng-click="clicked()">Isolated Scope - $parent Communication</button>',
		scope: {},
		controller: function ($scope, $element, $attrs) {
			$scope.clicked = () => $scope.$parent.alert0('Message 5');
		}
	};
});
