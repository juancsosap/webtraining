var app = angular.module("AppModule", []);

var reset = function() {
  document.getElementById("n1").value = "0";
  document.getElementById("n2").value = "0";
  document.getElementById("n3").value = "0";
};

var manualReset = function() {
  var ctrlElement = document.getElementsByTagName('html');
  var $scope = angular.element(ctrlElement).scope()
  $scope.n1 = 0;
  document.getElementById("n2").value = "0";
  $scope.n3 = 0;
  $scope.$digest();
};

var ctrl = function ($scope, $rootScope) {

  $scope.title = 'Watchers - AngularJS Training';
  $scope.year = 2018;

  $scope.author = {
  	name: 'Juan Carlos',
  	surname: 'Sosa Peña'
  };

  $scope.reset = function() {
    $scope.n1 = 0;
    $scope.n2 = 0;
    $scope.n3 = 0;
  };

  $scope.n1 = 0;
  $scope.n2 = 0;
  $scope.n3 = 0;

  $scope.$watch('n1', function (newVal, oldVal) {
    console.log('n1 was modified to ' + newVal);
    if($scope.n1 > 15) $scope.n2 += 5;
  });

  $scope.$watch('n2', function (newVal, oldVal) {
    console.log('n2 was modified to ' + newVal);
    if($scope.n2 > 10) $scope.n1 += 5;
  });

  $scope.$watch('n3', function (newVal, oldVal) {
    console.log('n3 was modified to ' + newVal);
    if($scope.n3 > 5) $scope.n2 += 5;
  });

  $rootScope.$watch(function () {
    console.log('-- Digest Cycle was started --');
  });

};

app.controller("AppController", ['$scope', '$rootScope', ctrl]);

app.controller("AppController0", ['$scope', function ($scope) {
  $scope.c0 = 0;
}]);

var resetC0 = function () {
  var ctrlElement = document.getElementById('ctrl0');
  var $scope = angular.element(ctrlElement).scope();
  $scope.c0 = 0;
};

app.controller("AppController1", ['$scope', function ($scope) {
  $scope.c1 = 0;
}]);

var resetC1 = function () {
  var ctrlElement = document.getElementById('ctrl1');
  var $scope = angular.element(ctrlElement).scope();
  $scope.c1 = 0;
  $scope.$digest();
};

app.controller("AppController2", ['$scope', function ($scope) {
  $scope.c2 = 0;
}]);

var resetC2 = function () {
  var ctrlElement = document.getElementById('ctrl2');
  var $scope = angular.element(ctrlElement).scope();
  $scope.c2 = 0;
  $scope.$apply();
};
