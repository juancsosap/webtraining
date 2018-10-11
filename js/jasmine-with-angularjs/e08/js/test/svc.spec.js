describe('Testing AngularJS Test Suite', function () {

	beforeEach(function () {
		angular.module('LocalStorageModule', []);
		module('app');
	});

	describe('Testing AngularJS Countries Service', function () {
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

	describe('Testing AngularJS Text Service', function () {
		var _ts;

		beforeEach(function () {
			inject(['textService', function (_ts_) {
				_ts = _ts_;
			}]);
		});

		it('should capitalize text', function () {
			expect(_ts.capitalize('hola')).toEqual('Hola');
			expect(_ts.capitalize('HOLA')).toEqual('Hola');
			expect(_ts.capitalize('hOlA')).toEqual('Hola');
		});

		it('should shorten text', function () {
			expect(_ts.shorten('hola como estas', 12)).toEqual('hola como es ...');
			expect(_ts.shorten('HOLA')).toEqual('Hola');
			expect(_ts.shorten('hOlA')).toEqual('Hola');
		});

	});

});
