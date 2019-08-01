var app = angular.module("AppModule", []);

var ctrl = function ($scope) {

  $scope.title = 'Repeat - AngularJS';
  $scope.year = 2018;

  $scope.author = {
  	name: 'Juan Carlos',
  	surname: 'Sosa Peña'
  };

  $scope.trainings = [
  	'Java', 'C#', 'Python', 'HTML',
  	'CSS', 'JavaScript', 'ASP.Net'
  ];

};

app.controller("AppController", ctrl);
