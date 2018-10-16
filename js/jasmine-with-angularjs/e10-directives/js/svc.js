var app = angular.module('app');

app.service('countriesService', function () {
  var countries = ['Chile', 'Colombia', 'Peru', 'Venezuela', 'Argentina'];

	this.getAll = () => countries;
  this.getOne = (index) => countries[index];
  this.getQuantity = () => countries.length;
});

app.service('textService', function () {
  this.capitalize = function (text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };
  this.shorten = function (text, length) {
    length = length || 10; // default value
    if(text.length <= length) {
      return text;
    } else {
      return text.substring(0, length) + " ...";
    }
  };
});
