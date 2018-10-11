var app = angular.module('app', []);

app.controller('ctrl', ['$scope', function ($scope) {
	$scope.msg = 'Unit Testing AngularJS';

	$scope.destinations = [];

	$scope.newDestination = {
		city: undefined,
		country: undefined
	};

	$scope.addDestination = function () {
		$scope.destinations.push({
			city: $scope.newDestination.city,
			country: $scope.newDestination.country
		});
	};
}]);
