describe('Testing AngularJS Test Suite', function () {

	beforeEach(function () {
		angular.module('LocalStorageModule', []);
		module('app');
	});

	describe('Testing AngularJS Service', function () {
		var _cs, _apiMock;

		beforeEach(function () {
			_apiMock = jasmine.createSpyObj('apiServiceMock',['get', 'post']);
			_apiMock.get.and.returnValue([{name:'Chile'}, {name:'Peru'}]);

			module(['$provide', function ($provide) {
				$provide.value('apiService', _apiMock);
			}]);

			inject(['countriesService', function (_cs_) {
				_cs = _cs_;
			}]);
		});

		it('should get all the countries', function () {
			_cs.getAll(function (result) {
				expect(result.length).toEqual(2);
			});
			//expect(_cs.getAll().length).toBeGreaterThan(0);
			//expect(_cs.getAll()[0]).toEqual('Chile');
		});

	});

});
