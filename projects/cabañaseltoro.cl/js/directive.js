app.directive('cngNavbar', function () {
  var controller = function ($scope, $element, $attrs) {
		$scope.page = $attrs.cngNavbar;
	};

	return {
    controller: controller,
    scope: true,
    templateUrl: 'templates/navbar.html'
	};
});

app.directive('cngFooter', function () {
	return {
    templateUrl: 'templates/footer.html'
	};
});

app.directive('cngImportCss', function () {
	return {
    restrict: 'E',
    templateUrl: 'templates/importcss.html'
	};
});

app.directive('cngCard', function () {
	return {
		templateUrl: 'templates/card.html',
		scope: { page: '@cngCard', image: '@cngImage' },
		transclude: true,
    replace: true
	};
});

app.directive('cngBox', function () {
	return {
		templateUrl: 'templates/box.html',
		transclude: true
	};
});

app.directive('cngCardGallery', function () {
	return {
		templateUrl: 'templates/cardgallery.html',
		scope: { folder: '@cngCardGallery', max: '@cngMax' },
		transclude: true,
    controller: function ($scope, $element, $attrs) {
      $scope.getList = (max) => new Array(parseInt(max) - 1);
		}
	};
});

app.directive('cngItem', function () {
	return {
    restrict: 'A',
    templateUrl: 'templates/item.html',
    scope: { text: '@cngItem', icon: '@cngIcon' }
	};
});

app.directive('cngCarouselItem', function () {
	return {
    restrict: 'A',
    templateUrl: 'templates/carouselitem.html',
    scope: { image: '@cngCarouselItem', active: '@cngActive' },
		transclude: true,
    replace: true
	};
});

app.directive('cngCarousel', function () {
	return {
    restrict: 'A',
    templateUrl: 'templates/carousel.html',
    scope: { image: '@cngCarousel' },
		transclude: true,
    replace: true
	};
});
