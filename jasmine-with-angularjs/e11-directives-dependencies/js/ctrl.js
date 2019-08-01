var app = angular.module('app', ['LocalStorageModule']);

app.controller('ctrl', ['$scope', 'localStorageService', 'countriesService',
	function ($scope, _lss, _contriesSvc) {
		$scope.msg = 'Unit Testing AngularJS';

		var storage = 'trip-storage';

		$scope.destinations = (_lss.get(storage) || []);

		$scope.newDestination = {
			city: undefined,
			country: undefined
		};

		$scope.countries = _contriesSvc.getAll();

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
