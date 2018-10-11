var app = angular.module("AppModule", []);

var ctrl = function (model) {

  model.title = 'Dependency Inyection - AngularJS';
  model.year = 2018;

  model.author = {
  	name: 'Juan Carlos',
  	surname: 'Sosa Peña'
  };

};

app.controller("AppController", ['$scope', ctrl]);
