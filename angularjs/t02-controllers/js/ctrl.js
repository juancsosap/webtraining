var app = angular.module("AppModule", []);

var appcont = function ($scope) {
  $scope.msg = 'Modules & Controllers - AngularJS';
  $scope.author = 'Juan Carlos Sosa Peña';
  $scope.year = 2018;
};

app.controller("AppController", appcont);
