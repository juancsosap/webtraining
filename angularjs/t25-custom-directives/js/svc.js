var svc = function () {

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

};

app.provider('apiService', svc);
