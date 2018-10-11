var app = angular.module("AppModule", []);

var ctrl = function ($scope) {
	
  $scope.title = 'Two-Way Bindings - AngularJS';
  $scope.year = 2018;

  $scope.author = {
  	name: 'Juan Carlos',
  	surname: 'Sosa Peña'
  };

  $scope.user = {
  	name: 'Juanito',
  	surname: 'Perez'
  };
  
};

app.controller("AppController", ctrl);
