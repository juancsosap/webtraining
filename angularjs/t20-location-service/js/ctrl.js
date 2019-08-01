var app = angular.module("AppModule", []);

var ctrl = function ($scope, $location, $anchorScroll) {

  $scope.title = 'Location Service - AngularJS';
  $scope.year = 2018;

  $scope.author = {
  	name: 'Juan Carlos',
  	surname: 'Sosa Peña'
  };

  $scope.trainees = [
  	{name:"Juan", surname:"Perez", code: 'ABCD078',
  	 phone:"+56 9 4632 7016", address:"Chile"},
  	{name:"Maria", surname:"Gonzales", code: 'DFER234',
  	 phone:"+54 9 4349 1221", address:"Argentina"},
  	{name:"Ana", surname:"Silva", code: 'VCFG567',
  	 phone:"+56 9 4943 1221", address:"Chile"},
  	{name:"Ana", surname:"Espinoza", code: 'BNHG987',
  	 phone:"+56 9 5555 7621", address:"Chile"},
  	{name:"Carlos", surname:"Prada", code: 'ASDF469',
  	 phone:"+58 414 632 016", address:"Venezuela"}
  ];

	$scope.scrollTo = function (location) {
			$location.hash(location);
			$anchorScroll();
		};

};

app.controller("AppController", ['$scope', '$location', '$anchorScroll', ctrl]);
