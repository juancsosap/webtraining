var app = angular.module("AppModule", []);

var ctrl = function ($scope, $rootScope) {

  $scope.title = 'Eval / Parse / Interpolate - AngularJS Training';
  $scope.year = 2018;

  $scope.author = {
  	name: 'Juan Carlos',
  	surname: 'Sosa Peña'
  };

};

app.controller("AppController", ['$scope', ctrl]);
