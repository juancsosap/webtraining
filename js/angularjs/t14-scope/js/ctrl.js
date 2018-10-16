var app = angular.module("AppModule", []);

var main = function ($rootScope) {

	$rootScope.value = "rootValue";
	$rootScope.level = "root";

};

app.run(main);

var ctrl1 = function ($scope) {

  $scope.title = 'Scope - AngularJS';
  $scope.year = 2018;

  $scope.author = {
  	name: 'Juan Carlos',
  	surname: 'Sosa Peña'
  };

  $scope.level = 'ctrl1';

};

app.controller("AppController1", ctrl1);

var ctrl2 = function ($scope) {

  $scope.value = 'ctrl2Value';
  $scope.level = 'ctrl2';

};

app.controller("AppController2", ctrl2);

var ctrl3 = function ($scope, $rootScope) {

	$scope.value = 'ctrl3Value';
  $scope.level = 'ctrl3';

	$scope.changeValue = function () {
		$rootScope.value = 'ctrl3ValueFromRoot';
	};

};

app.controller("AppController3", ctrl3);

var ctrl4 = function ($scope) {

	$scope.value = 'ctrl4Value';
  $scope.level = 'ctrl4';

	$scope.changeValue = function () {
		$scope.$parent.value = 'ctrl4ValueFromParent';
	};

};

app.controller("AppController4", ctrl4);
