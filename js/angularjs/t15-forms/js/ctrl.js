var app = angular.module("AppModule", []);

var ctrl = function ($scope) {

  $scope.title = 'Forms - AngularJS';
  $scope.year = 2018;

  $scope.author = {
  	name: 'Juan Carlos',
  	surname: 'Sosa Peña'
  };

	$scope.data = [];
	$scope.newPost = {};

	var count = 0;

	$scope.addPost = function () {
		count = count + 1;
		$scope.newPost.id = count;

		$scope.data.push($scope.newPost);
		$scope.newPost = {};
	};

};

app.controller("AppController", ctrl);
