describe('Testing AngularJS Test Suite', function () {

	beforeEach(module('app'));

	describe('Testing AngularJS Controller', function () {
		var ctrl, scope;

		beforeEach(inject(function ($controller, $rootScope) {
			scope = $rootScope.$new();
			ctrl = $controller('ctrl', {$scope: scope});
		}));

		afterEach(function () {});

		it('should initialize the msg in the scope', function () {
			expect(scope.msg).toBeDefined();
			expect(scope.msg).toBe('Unit Testing AngularJS');
		});

	});
});
