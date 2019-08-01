describe('Testing AngularJS Test Suite', function () {

	beforeEach(function () {
		angular.module('LocalStorageModule', []);
		module('app');
	});

	describe('Testing AngularJS cng-title Directive', function () {
		var _element;

		beforeEach(function () {
			inject(['$compile', function ($compile) {
				_element = angular.element('<span cng-title></span>');
				$compile(_element);
			}]);
		});

		it('should create a DOM node with the template correctly', function () {
			expect(_element.text()).toContain('Your Trip');
		});

	});

	describe('Testing AngularJS cng-clean-button Directive', function () {
		var _element;

		beforeEach(module('html/templates/cleanbutton.html'));

		beforeEach(function () {
			inject(['$compile', '$rootScope', function ($compile, $rootScope) {
				_element = angular.element('<span cng-clean-button></span>');
				$compile(_element)($rootScope);
				$rootScope.$digest();
			}]);
		});

		it('should create a DOM node with the template correctly', function () {
			expect(_element.text()).toContain('Clean');
		});

	});

	describe('Testing AngularJS cng-csv-data Directive', function () {
		var _element;

		beforeEach(function () {
			inject(['$compile', function ($compile) {
				$scope = {destination: {city:'Santiago', country:'Chile'}};
				_element = angular.element('<span cng-csv-data="destination"></span>');
				$compile(_element)($scope);
			}]);
		});

		it('should create a DOM node with the template correctly', function () {
			expect(_element.text()).toContain('Santiago, Chile');
		});

	});

});
