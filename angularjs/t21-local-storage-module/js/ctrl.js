var app = angular.module("AppModule", ["LocalStorageModule"]);

var ctrl = function ($scope, localStorageService) {

  $scope.title = 'Local Storage Module - AngularJS';
  $scope.year = 2018;

  $scope.author = {
  	name: 'Juan Carlos',
  	surname: 'Sosa Peña'
  };

	if(localStorageService.get("toDoList-storage")) {
		$scope.list = localStorageService.get("toDoList-storage");
	} else {
		$scope.list = [];
	}

	$scope.newToDo = {};

	$scope.addToDo = function () {
		$scope.list.push($scope.newToDo);
		localStorageService.set("toDoList-storage", $scope.list);
		$scope.newToDo = {};
	};

	$scope.cleanToDo = function () {
		$scope.list = [];
		localStorageService.remove("toDoList-storage");
	};

};

app.controller("AppController", ['$scope', 'localStorageService', ctrl]);
