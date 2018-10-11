var app = angular.module("AppModule", []);

var ctrl = function ($scope) {

  $scope.title = 'Filters - AngularJS';
  $scope.year = 2018;

  $scope.author = {
  	name: 'Juan Carlos',
  	surname: 'Sosa Peña'
  };

	$scope.fields = ['Name','Surname','Code','Phone',
                   'Address','Register','Payment'];

  $scope.trainees = [
  	{name:"Juan", surname:"Perez", code: 'ABCD078',
  	 phone:"+56 9 4632 7016", address:"Chile",
     register: new Date(2018,03,25), payment: 15300},
  	{name:"Maria", surname:"Gonzales", code: 'DFER234',
  	 phone:"+54 9 4349 1221", address:"Argentina",
     register: new Date(2018,05,27), payment: 17200},
  	{name:"Ana", surname:"Silva", code: 'VCFG567',
  	 phone:"+56 9 4943 1221", address:"Chile",
     register: new Date(2018,06,15), payment: 25400},
  	{name:"Ana", surname:"Espinoza", code: 'BNHG987',
  	 phone:"+56 9 5555 7621", address:"Chile",
     register: new Date(2018,06,27), payment: 12900},
  	{name:"Carlos", surname:"Prada", code: 'ASDF469',
  	 phone:"+58 414 632 016", address:"Venezuela",
     register: new Date(2018,07,03), payment: 19800}
  ];

};

app.controller("AppController", ctrl);
