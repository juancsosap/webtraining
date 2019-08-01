var app = angular.module("AppModule", []);

var ctrl = function ($scope) {

  $scope.title = 'Actions - AngularJS';
  $scope.year = 2018;

  $scope.author = {
  	name: 'Juan Carlos',
  	surname: 'Sosa Peña'
  };

	$scope.fields = ['name','surname','phone','address'];

  $scope.trainees = [
  	{name:"Juan", surname:"Perez",
  	 phone:"+56 9 4632 7016", address:"Chile"},
  	{name:"Maria", surname:"Gonzales",
  	 phone:"+54 9 4349 1221", address:"Argentina"},
  	{name:"Ana", surname:"Silva",
  	 phone:"+56 9 4943 1221", address:"Chile"},
  	{name:"Ana", surname:"Espinoza",
  	 phone:"+56 9 5555 7621", address:"Chile"},
  	{name:"Carlos", surname:"Prada",
  	 phone:"+58 414 632 016", address:"Venezuela"}
  ];

  $scope.resetsort = function () {
  	$scope.field = '';
  	$scope.sort = {name: '', surname: '', phone: '', address: ''};
  };

  $scope.sorter = function (field) {
  	$scope.resetsort();
  	$scope.field = field;
  	$scope.sort[field] = 'text-success';
  };

};

app.controller("AppController", ctrl);
