var app = angular.module("AppModule", []);

var appcont0 = function ($scope) {
  $scope.msg = 'Access Errors - AngularJS';
  $scope.author = 'Juan Carlos Sosa Peña';
  $scope.year = 2018;
  $scope.info0 = 'OK';
};

var appcont1 = function ($scope) {
  $scope.info2 = 'OK';
};

var appcont2 = function ($scope) {
  $scope.info2 = 'OK';
};

app.controller("AppController0", appcont0);
app.controller("AppController1", appcont1);
app.controller("AppController2", appcont2);
