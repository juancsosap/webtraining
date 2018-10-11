describe('Testing AngularJS Test Suite', function () {

	describe('Testing AngularJS Controller', function () {

		it('should initialize the msg in the scope', function () {
			module('app');

			var $scope = {};
			var $controller;

			inject(['$controller', function (_$controller_) {
				$controller = _$controller_('ctrl', {'$scope': $scope})
			}]);

			expect($scope.msg).toBeDefined();
			expect($scope.msg).toBe('Unit Testing AngularJS');
		});

	});

});
