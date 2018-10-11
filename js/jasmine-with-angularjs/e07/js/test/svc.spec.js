describe('Testing AngularJS Test Suite', function () {

	beforeEach(function () {
		angular.module('LocalStorageModule', []);
		module('app');
	});

	describe('Testing AngularJS Service', function () {
		var _cs;

		beforeEach(function () {
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

});
