var app = angular.module("AppModule", []);

var ctrl = function ($scope, _api) {

  $scope.title = 'Custom Provider Services - AngularJS';
  $scope.year = 2018;

  $scope.author = {
  	name: 'Juan Carlos',
  	surname: 'Sosa Peña'
  };

	_api.get(function (result) {
		$scope.data = result;
	});

	$scope.newPost = {};
	$scope.addPost = function () {

		var payload = {
			userId: $scope.newPost.userId,
			title: $scope.newPost.title,
			body: $scope.newPost.body
		};

		_api.post(payload, function (result) {
			$scope.data.push(result);
			$scope.newPost = {};
		});

	};

};

app.controller("AppController", ['$scope', 'apiService', ctrl]);

app.config(['apiServiceProvider', function (_apiProvider) {
	_apiProvider.config('https://jsonplaceholder.typicode.com/posts');
}]);
