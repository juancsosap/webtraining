var app = angular.module("mainApp", []);

app.controller("mainCtrl", ["$scope", function($scope) {
  $scope.title = "Cabañas El Toro - Radal Siete Tazas";
  $scope.menus = [{page:'index', title:'Inicio'}];
}]);

app.filter('numberLen', ()=>(num, len)=>(1e10 + "" + num).slice(-len));
