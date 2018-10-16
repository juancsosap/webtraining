var app = angular.module("AppModule", []);

var ctrl = function ($scope) {

  $scope.title = 'Custom Directives - AngularJS Training';
  $scope.year = 2018;

  $scope.author = {
  	name: 'Juan Carlos',
  	surname: 'Sosa Peña'
  };
 
};

app.controller("AppController", ['$scope', ctrl]);
