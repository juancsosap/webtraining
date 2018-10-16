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

		it('should add new Destinations in the scope', function () {
			expect($scope.destinations.length).toBe(0);

			$scope.newDestination = {city: 'Iquique', country: 'Chile'};
			$scope.addDestination();
			expect($scope.destinations.length).toBe(1);
			expect($scope.destinations[0].city).toEqual('Iquique');
			expect($scope.destinations[0].country).toEqual('Chile');

			$scope.newDestination = {city: 'Lima', country: 'Peru'};
			$scope.addDestination();
			expect($scope.destinations.length).toBe(2);
			expect($scope.destinations[0].city).toEqual('Iquique');
			expect($scope.destinations[0].country).toEqual('Chile');
			expect($scope.destinations[1].city).toEqual('Lima');
			expect($scope.destinations[1].country).toEqual('Peru');
		});

	});

});
