var app = angular.module("AppModule", []);

var ctrl = function ($scope, $http) {

  $scope.title = 'HTTP Service - AngularJS';
  $scope.year = 2018;

  $scope.author = {
  	name: 'Juan Carlos',
  	surname: 'Sosa Peña'
  };

	var url = 'https://jsonplaceholder.typicode.com/posts';

	$http.get(url).then(function (response) {
			$scope.data = response.data;
		}, function (response) {
			console.log('Status: ' + response.status + ' - Error: ' + response.statusText);
		});

	$scope.newPost = {};

	$scope.addPost = function () {

		var payload = {
			userId: $scope.newPost.userId,
			title: $scope.newPost.title,
			body: $scope.newPost.body
		};

		$http.post(url, payload).then(function (response) {
				$scope.data.push(response.data);
				$scope.newPost = {};
			}, function (response) {
				console.log('Status: ' + response.status);
				console.log('Error: ' + response.statusText);
			});
	};

};

app.controller("AppController", ['$scope', '$http', ctrl]);
