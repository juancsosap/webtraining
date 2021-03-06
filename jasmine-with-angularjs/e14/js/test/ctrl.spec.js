describe('Testing AngularJS Test Suite', function () {

	beforeEach(function () {
		angular.module('LocalStorageModule', []);
		module('app');
	});

	describe('Testing AngularJS Controller', function () {
		var $controller, $scope;
		var _lssMock;

		describe('With localStorageServiceMock with data', function () {

			beforeEach(function () {
				_lssMock = jasmine.createSpyObj('localStorageServiceMock',['set', 'get', 'remove']);
				_lssMock.get.and.returnValue([{city: 'Iquique', country: 'Chile'}]);
				_csMock = jasmine.createSpyObj('countriesServiceMock',['getAll', 'getOne', 'getQuantity']);
				_csMock.getAll.and.returnValue(['Chile', 'Peru']);

				module(['$provide', function ($provide) {
					$provide.value('localStorageService', _lssMock);
					$provide.value('countriesService', _csMock);
				}]);

				inject(['$controller', '$rootScope', function (_$controller_, _$rootScope_) {
					$scope = _$rootScope_.$new();
					$controller = _$controller_('ctrl', {'$scope': $scope});
				}]);
			});

			it('should initialize the msg in the scope', function () {
				expect($scope.msg).toBeDefined();
				expect($scope.msg).toBe('Unit Testing AngularJS');
			});

			it('should try to get the existing Destinations from the localStorage', function () {
				expect($scope.destinations.length).toBe(1);
				expect($scope.destinations[0].city).toEqual('Iquique');
				expect($scope.destinations[0].country).toEqual('Chile');
			});

			it('should try to get the existing Countries from the countriesService', function () {
				expect($scope.countries.length).toBe(2);
				expect($scope.countries[0]).toEqual('Chile');
				expect($scope.countries[1]).toEqual('Peru');
			});

			it('should add new Destinations in the scope', function () {
				$scope.newDestination = {city: 'Lima', country: 'Peru'};
				$scope.addDestination();
				expect($scope.destinations.length).toBe(2);
				expect($scope.destinations[0].city).toEqual('Iquique');
				expect($scope.destinations[0].country).toEqual('Chile');
				expect($scope.destinations[1].city).toEqual('Lima');
				expect($scope.destinations[1].country).toEqual('Peru');
			});

			it('should try to storage the new Destinations in the localStorage', function () {
				$scope.newDestination = {city: 'Lima', country: 'Peru'};
				$scope.addDestination();

				expect(_lssMock.set).toHaveBeenCalled();
				expect(_lssMock.set).toHaveBeenCalledWith('trip-storage',[{city: 'Iquique', country: 'Chile'},
																																	{city: 'Lima', country: 'Peru'}]);

				$scope.newDestination = {city: 'Bogota', country: 'Colombia'};
				$scope.addDestination();

				expect(_lssMock.set.calls.count()).toBe(2);
			});

			it('should try to clean the localStorage', function () {
				$scope.clean();

				expect($scope.destinations).toEqual([]);
				expect(_lssMock.remove).toHaveBeenCalled();
				expect(_lssMock.remove).toHaveBeenCalledWith('trip-storage');
			});

		});

		describe('With ServiceMock with no data', function () {

			beforeEach(function () {
				_lssMock = jasmine.createSpyObj('localStorageServiceMock',['set', 'get', 'remove']);
				_lssMock.get.and.returnValue(null);
				_csMock = jasmine.createSpyObj('countriesServiceMock',['getAll', 'getOne', 'getQuantity']);
				_csMock.getAll.and.returnValue([]);

				module(['$provide', function ($provide) {
					$provide.value('localStorageService', _lssMock);
					$provide.value('countriesService', _csMock);
				}]);

				inject(['$controller', '$rootScope', function (_$controller_, _$rootScope_) {
					$scope = _$rootScope_.$new();
					$controller = _$controller_('ctrl', {'$scope': $scope});
				}]);
			});

			it('should try to get the existing Destinations from the localStorage', function () {
				expect($scope.destinations.length).toBe(0);
			});

			it('should try to get the existing Countries from the CountriesService', function () {
				expect($scope.countries.length).toBe(0);
			});

			it('should add new Destinations in the scope', function () {
				$scope.newDestination = {city: 'Lima', country: 'Peru'};
				$scope.addDestination();
				expect($scope.destinations.length).toBe(1);
				expect($scope.destinations[0].city).toEqual('Lima');
				expect($scope.destinations[0].country).toEqual('Peru');
			});

			it('should try to storage the new Destinations in the localStorage', function () {
				_lssMock.set.calls.reset();

				$scope.newDestination = {city: 'Lima', country: 'Peru'};
				$scope.addDestination();

				expect(_lssMock.set).toHaveBeenCalled();
				expect(_lssMock.set).toHaveBeenCalledWith('trip-storage',[{city: 'Lima', country: 'Peru'}]);

				$scope.newDestination = {city: 'Bogota', country: 'Colombia'};
				$scope.addDestination();

				expect(_lssMock.set.calls.count()).toBe(2);
			});

			it('should try to clean the localStorage', function () {
				_lssMock.remove.calls.reset();

				$scope.clean();

				expect(_lssMock.remove).toHaveBeenCalled();
				expect(_lssMock.remove).toHaveBeenCalledWith('trip-storage');
			});

		});

	});

});
