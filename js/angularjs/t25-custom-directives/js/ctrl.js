var app = angular.module("AppModule", []);

var ctrl = function ($scope, _api) {

  $scope.title = 'Custom Directives - AngularJS Training';
  $scope.year = 2018;

  $scope.author = {
  	name: 'Juan Carlos',
  	surname: 'Sosa Peña'
  };

	$scope.header = "Posts List";
	$scope.fields = ['ID','UserID','Title','Body'];

	_api.get(function (result) {
		$scope.data = result;
	});

};

app.controller("AppController", ['$scope', 'apiService', ctrl]);

app.config(['apiServiceProvider', function (_apiProvider) {
	_apiProvider.config('https://jsonplaceholder.typicode.com/posts');
}]);
