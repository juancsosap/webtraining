var app = angular.module('app', []);

app.controller('ctrl', ['$scope', function ($scope) {
  $scope.values = [1,2];

  $scope.calculate = function () {
    $scope.result = add($scope.values);
  };

  $scope.calculate();
}]);
