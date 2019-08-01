var app = angular.module('app');

app.filter('capitalize', ['textService', function (_textSvc) {
  return function (text, shortLength) {
    if(shortLength) {
      return _textSvc.shorten(_textSvc.capitalize(text), shortLength);
    } else {
      return _textSvc.capitalize(text);
    }
  };
}]);
