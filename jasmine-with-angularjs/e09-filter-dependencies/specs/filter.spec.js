describe('Testing AngularJS Test Suite', function () {

	beforeEach(function () {
		angular.module('LocalStorageModule', []);
		module('app');
	});

	describe('Testing AngularJS Service', function () {
		var _cf;

		beforeEach(function () {
			_tsMock = jasmine.createSpyObj('textServiceMock',['capitalize', 'shorten']);
			_tsMock.capitalize.and.returnValue('Abc');
			_tsMock.shorten.and.returnValue('Abc ...');

			module(['$provide', function ($provide) {
				$provide.value('textService', _tsMock);
			}]);

			inject(['capitalizeFilter', function (_cf_) {
				_cf = _cf_;
			}]);
		});

		it('should capitalize correctly', function () {
			expect(_cf('abc')).toEqual('Abc');
		});

		it('should shorten correctly', function () {
			expect(_cf('abcdef', 3)).toEqual('Abc ...');
		});

	});

});
