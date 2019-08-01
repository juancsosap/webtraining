var app = angular.module("AppModule", []);

var ctrl = function ($scope, _validator) {

	$scope.title = 'Custom Service Services - AngularJS';
	$scope.year = 2018;

	$scope.author = {
		name: 'Juan Carlos',
		surname: 'Sosa Peña'
	};

	$scope.validate = function (input) {
			_validator.validateRut(input, function (result) {
				$scope.flag = result ? 'Right' : 'Wrong';
			});
		};

};

app.controller("AppController", ["$scope", "validatorService", ctrl]);
