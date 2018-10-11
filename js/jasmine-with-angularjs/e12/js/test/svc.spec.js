describe('Testing AngularJS Test Suite', function () {

	beforeEach(function () {
		angular.module('LocalStorageModule', []);
		module('app');
	});

	describe('Testing AngularJS Countries Service', function () {
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
			expect(_cs.getAll().length).toEqual(_cs.getQuantity());
			expect(_cs.getAll().length).toBeGreaterThan(0);
			expect(_cs.getAll()[0]).toEqual('Chile');
		});

	});

	describe('Testing AngularJS API Service', function () {
		var $httpBackend;

		beforeEach(function () {
			_apiMock = jasmine.createSpyObj('apiServiceMock',['get', 'post']);
			_apiMock.get.and.returnValue([{name:'Chile'}, {name:'Peru'}]);

			module(['$injector', function ($injector) {
				$httpBackend = $injector.get('$httpBackend');
			}]);

			inject(['countriesService', function (_cs_) {
				_cs = _cs_;
			}]);
		});

		afterEach(function () {
			$httpBackend.verifyNoOutstandingExpectation();
			$httpBackend.verifyNoOutstandingRequest();
		});

		it('should make get reuqest', function () {
			$httpBackend.expectGET(url).respond([{name:'Chile'}, {name:'Peru'}])

			expect(_cs.getAll().length).toEqual(_cs.getQuantity());
			expect(_cs.getAll().length).toBeGreaterThan(0);
			expect(_cs.getAll()[0]).toEqual('Chile');
		});

	});

});
