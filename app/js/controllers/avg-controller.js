// avg-controller

module.exports = function(app) {
  app.controller('avgController', function($scope){

    // Add repeating number input fields
    // use http://stackoverflow.com/questions/18082/validate-decimal-numbers-in-javascript-isnumeric

    // sanitize input to only recognize numbers
    $scope.sanitize = function(inputString) {
      if (!inputString) return null; // early returns to prevent console errors
      var strArray = inputString.match(/-?\.?[0-9]+\.?[0-9]*/g);
      if (!strArray) return null; // same, prevent console errors
      var numArray = strArray.map(parseFloat);
      return numArray;
    };

    $scope.stringify = function(someArray) {
      if (!someArray) return null;
      return someArray.join(', ');
    };

    $scope.sortify = function(someArray) {
      if (!someArray) return null;
      return someArray.sort(function (a, b) { return a - b; });
    };

    $scope.displaySorted = function(inputString) {
      if (!inputString || !$scope.sanitize(inputString)) return null;
      return $scope.stringify($scope.sortify($scope.sanitize(inputString)));
    };

    $scope.calcMean = function(inputString) {
      var numArray = $scope.sanitize(inputString);
      if (!numArray) return null;
      if (numArray.length < 2) return numArray[0];
      sum = numArray.reduce(function (a, b) {
        return +a + +b;
      });
      mean = sum / numArray.length;
      return mean;
    };

    $scope.calcMedian = function(inputString) {
      var numArray = $scope.sanitize(inputString);
      if (!numArray) return null;
      var sorted = $scope.sortify(numArray);

      // if array length is odd
      if (sorted.length % 2) {
        return sorted[Math.floor(sorted.length / 2)];
      } 
      // if array length is even
      else {
        var el1 = sorted[Math.floor(sorted.length / 2)];
        var el2 = sorted[Math.floor(sorted.length / 2 - 1)];
        return (el1 + el2) / 2;
      };
    };

    $scope.calcMode = function(inputString) {
      var numArray = $scope.sanitize(inputString);
      if (!numArray) return null;
      // Assumes multiple modes possible. If all inputs unique, all are modes.
      var modeMap = {},
          maxCount = 0, 
          modes = [numArray[0]];

      for(var i = 0; i < numArray.length; i++) {
        var el = numArray[i];
        
        if (modeMap[el] == null) { modeMap[el] = 1; }
        else { modeMap[el]++; }

        if (modeMap[el] > maxCount) {
          modes = [el];
          maxCount = modeMap[el];
        } else if (modeMap[el] == maxCount) {
          modes.push(el);
          maxCount = modeMap[el];
        }
      }
      return $scope.stringify($scope.sortify(modes));
    };
  });
};
