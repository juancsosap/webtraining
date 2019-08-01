var app = angular.module("AppModule", []);

var ctrl = function ($scope) {

  $scope.title = 'Custom Directives - AngularJS Training';
  $scope.year = 2018;

  $scope.author = {
  	name: 'Juan Carlos',
  	surname: 'Sosa Peña'
  };

  $scope.info1 = { msg: 'Isolated Scope - = Object1 Communication' };
  $scope.info2 = { msg: 'Isolated Scope - = Object2 Communication' };

  $scope.alert1 = () => alert('Message 1');
  $scope.alert2 = () => alert('Message 2');
  $scope.alert0 = (x) => alert(x);

  $scope.visible = false;
};

app.controller("AppController", ['$scope', ctrl]);
