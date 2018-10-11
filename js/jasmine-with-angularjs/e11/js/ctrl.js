var app = angular.module('app', ['LocalStorageModule']);

app.controller('ctrl', ['$scope', 'localStorageService', 'countriesService',
	function ($scope, _lss, _countriesSvc) {
		$scope.msg = 'Unit Testing AngularJS';

		var storage = 'trip-storage';

		$scope.destinations = _lss.get(storage) ? _lss.get(storage) : [];

		$scope.newDestination = {};

		_countriesSvc.getAll(function (result) {
			$scope.countries = result;
		});

		$scope.addDestination = function () {
			$scope.destinations.push($scope.newDestination);
			_lss.set(storage, $scope.destinations);
			$scope.newDestination = {};
		};

		$scope.clean = function () {
			$scope.destinations = [];
			_lss.remove(storage);
		};
	}
]);
