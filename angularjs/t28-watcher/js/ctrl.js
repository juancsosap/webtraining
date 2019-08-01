var app = angular.module("AppModule", []);

var ctrl = function ($scope) {

  $scope.title = 'Watchers - AngularJS Training';
  $scope.year = 2018;

  $scope.author = {
  	name: 'Juan Carlos',
  	surname: 'Sosa Peña'
  };

  $scope.n = [[0, 0, 0],
              [0, 0, 0],
              {n0:0, n1:0, n2:0},
              {n0:0, n1:0, n2:0},
              [0, 0, 0],
              [0, 0, 0],
              [{v:0}, {v:0}, {v:0}]
             ];

  $scope.update0 = () => $scope.n[0][0] = $scope.n[0][1] + $scope.n[0][2];

  $scope.$watch('n[1][1]', (newVal, oldVal) => $scope.n[1][0] = $scope.n[1][1] + $scope.n[1][2]);

  $scope.$watch('n[2]', (newVal, oldVal) => $scope.n[2].n0 = $scope.n[2].n1 + $scope.n[2].n2);

  $scope.$watch('n[3]', (newVal, oldVal) => $scope.n[3].n0 = $scope.n[3].n1 + $scope.n[3].n2, true);

  $scope.$watchGroup(['n[4][1]','n[4][2]'], (newVal, oldVal) => $scope.n[4][0] = $scope.n[4][1] + $scope.n[4][2]);

  $scope.$watchCollection('n[5]', (newVal, oldVal) => $scope.n[5][0] = $scope.n[5][1] + $scope.n[5][2]);

  $scope.$watchCollection('n[6]', (newVal, oldVal) => $scope.n[6][0].v = $scope.n[6][1].v + $scope.n[6][2].v);
  $scope.$watch('n[6][1]', (newVal, oldVal) => console.log('n61:' + $scope.n[6][1].v), true);
  $scope.$watch('n[6][2]', (newVal, oldVal) => console.log('n62:' + $scope.n[6][2].v), true);

};

app.controller("AppController", ['$scope', ctrl]);
