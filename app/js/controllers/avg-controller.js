// avgController

module.exports = function(app) {
  app.controller('avgController', function($scope, calcService) {

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

  });
};
