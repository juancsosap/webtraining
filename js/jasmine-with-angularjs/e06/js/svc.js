var app = angular.module('app');

app.service('countriesService', function () {
  var countries = ['Chile', 'Colombia', 'Peru', 'Venezuela', 'Argentina'];

	this.getAll = () => countries;
  this.getOne = (index) => countries[index];
  this.getQuantity = () => countries.length;
});
