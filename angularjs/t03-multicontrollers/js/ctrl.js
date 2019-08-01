var app = angular.module("AppModule", []);

var appcont0 = function ($scope) {
  $scope.msg = 'MultiControllers - AngularJS';
  $scope.author = 'Juan Carlos Sosa Peña';
  $scope.year = 2018;
};

var appcont1 = function () {
  this.info = 'Info from Controller 1';
};

var appcont2 = function ($scope) {
	$scope.obj2 = this;
  $scope.obj2.info = 'Info from Controller 2';
};

app.controller("AppController0", appcont0);
app.controller("AppController1", appcont1);
app.controller("AppController2", appcont2);
