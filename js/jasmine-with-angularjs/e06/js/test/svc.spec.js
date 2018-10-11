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
			var list = _cs.getAll(); // act

			// Assert
			expect(list.length).toEqual(_cs.getQuantity());
			expect(list.length).toBeGreaterThan(0);
			expect(list[0]).toEqual('Chile');
		});

	});

});
