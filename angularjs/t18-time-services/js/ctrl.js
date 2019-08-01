var app = angular.module("AppModule", []);

var ctrl = function ($scope, $timeout, $interval) {

	$scope.title = 'Time Services - AngularJS';
	$scope.year = 2018;

	$scope.author = {
		name: 'Juan Carlos',
		surname: 'Sosa Peña'
	};

	var loaded = false;

	$scope.msg = "Loading ";
	$timeout(function () {
			$scope.msg = "Loaded!!!";
			loaded = true;
		}, 5000);

	$scope.time = new Date().toLocaleTimeString();
	$interval(function () {
			$scope.time = new Date().toLocaleTimeString();
			if(!loaded) {
				$scope.msg = $scope.msg + '.';
			}
		}, 100);

};

app.controller("AppController", ['$scope', '$timeout', '$interval', ctrl]);
