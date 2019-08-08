var app = angular.module("AppModule", []);

var ctrl = function ($scope, $http) {

  $scope.title = 'Debugger - AngularJS Training';
  $scope.year = 2018;

  $scope.author = {
  	name: 'Juan Carlos',
  	surname: 'Sosa Peña'
  };

	var url = 'https://jsonplaceholder.typicode.com/posts';

	$scope.header = "Posts List";

	$scope.fields = ['ID','UserID','Title','Body'];

	$http.get(url).then(function (response) {
			debugger;
			$scope.data = response.data;
		}, function (response) {
			console.log('Status: ' + response.status + ' - Error: ' + response.statusText);
		});

};

app.controller("AppController", ['$scope', '$http', ctrl]);
