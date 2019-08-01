describe('Testing AngularJS Test Suite', function () {

	beforeEach(function () {
		angular.module('LocalStorageModule', []);
		module('app');
	});

	describe('Testing AngularJS Service', function () {
		var _cf;

		beforeEach(function () {
			inject(['capitalizeFilter', function (_cf_) {
				_cf = _cf_;
			}]);
		});

		it('should capitalize correctly', function () {
			expect(_cf('hola')).toEqual('Hola');
			expect(_cf('HOLA')).toEqual('Hola');
			expect(_cf('hOlA')).toEqual('Hola');
		});

	});

});
