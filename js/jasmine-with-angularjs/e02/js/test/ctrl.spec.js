describe('Testing AngularJS Test Suite', function () {

	beforeEach(function () {
		module('app');
	});

	describe('Testing AngularJS Controller', function () {
		var $controller, $scope;

		beforeEach(function () {
			inject(['$controller', '$rootScope', function (_$controller_, _$rootScope_) {
				$scope = _$rootScope_.$new();
				$controller = _$controller_('ctrl', {'$scope': $scope});
			}]);
		});

		it('should initialize the msg in the scope', function () {
			expect($scope.msg).toBeDefined();
			expect($scope.msg).toBe('Unit Testing AngularJS');
		});

	});

});
