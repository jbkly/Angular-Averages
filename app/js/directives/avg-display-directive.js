// avg display directive 
'use strict';

module.exports = function(app) {
  app.directive('avgDisplay', function() {
    var directasaurus = {
      restrict: 'EAC',
      templateUrl: 'views/avg-display.html',
      scope: {
      },
      controller: function($scope, calcService) {
        $scope.displaySorted = function(inputString) {
          return calcService.displaySorted(inputString);
        };

        $scope.calcMean = function(inputString) {
          return calcService.calcMean(inputString);
        };

        $scope.calcMedian = function(inputString) {
          return calcService.calcMedian(inputString);
        };

        $scope.calcMode = function(inputString) {
          return calcService.calcMode(inputString);
        };
      }
    };
    return directasaurus;
  });
};
