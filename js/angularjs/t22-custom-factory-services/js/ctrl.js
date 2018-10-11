var app = angular.module("AppModule", []);

var ctrl = function ($scope, _validator) {

	$scope.title = 'Custom Factory Services - AngularJS';
	$scope.year = 2018;

	$scope.author = {
		name: 'Juan Carlos',
		surname: 'Sosa Peña'
	};

	$scope.validate = function (input) {
			$scope.flag = _validator.validateRut(input) ? 'Right' : 'Wrong';
		};

};

app.controller("AppController", ["$scope", "validatorService", ctrl]);
