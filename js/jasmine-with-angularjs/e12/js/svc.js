var app = angular.module('app');

app.provider('apiService', function () {

	var url = '';
	this.config = function (apiUrl) {
		url = apiUrl;
	};

	this.$get = ['$http', function ($http) {
		var obj = {};

		obj.get = function (scb) {
			$http.get(url).then(function (response) {
					scb(response.data);
				}, function (response) {
					console.log('Status: ' + response.status + ' - Error: ' + response.statusText);
				});
		};

		obj.post = function (payload, scb) {
			$http.post(url, payload).then(function (response) {
					scb(response.data);
				}, function (response) {
					console.log('Status: ' + response.status);
					console.log('Error: ' + response.statusText);
				});
		};

		return obj;
	}];

});

app.service('countriesService', ['apiService', function (_api) {
	this.getAll = (cb) => _api.get((result) => cb(result.map((x) => x.name)));
  this.getOne = (index, cb) => _api.get((result) => cb(result.map((x) => x.name)[index]));
  this.getQuantity = (cb) => _api.get((result) => cb(result.map((x) => x.name).length));
}]);

app.config(['apiServiceProvider', function (_apiSvc) {
	_apiSvc.config('https://restcountries.eu/rest/v2/all');
}]);
