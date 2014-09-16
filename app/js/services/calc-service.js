// calcService

module.exports = function(app) {
  app.factory('calcService', function() {

    // sanitize input to only recognize numbers
    var sanitize = function(inputString) {
      if (!inputString) return null; // early returns to prevent console errors
      var strArray = inputString.match(/-?\.?[0-9]+\.?[0-9]*/g);
      if (!strArray) return null; // same, prevent console errors
      var numArray = strArray.map(parseFloat);
      return numArray;
    };

    // convert array to comma-separated string
    var stringify = function(someArray) {
      if (!someArray) return null;
      return someArray.join(', ');
    };

    // sort array ascending
    var sortify = function(someArray) {
      if (!someArray) return null;
      return someArray.sort(function (a, b) { return a - b; });
    };

    // calc object passed to controller
    var calc = {

      displaySorted: function(inputString) {
        if (!inputString || !sanitize(inputString)) return null;
        return stringify(sortify(sanitize(inputString)));
      },

      calcMean: function(inputString) {
        var numArray = sanitize(inputString);
        if (!numArray) return null;
        if (numArray.length < 2) return numArray[0];
        sum = numArray.reduce(function (a, b) {
          return +a + +b;
        });
        mean = sum / numArray.length;
        return mean;
      },

      calcMedian: function(inputString) {
        var numArray = sanitize(inputString);
        if (!numArray) return null;
        var sorted = sortify(numArray);

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
      },

      calcMode: function(inputString) {
        var numArray = sanitize(inputString);
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
        return stringify(sortify(modes));
      }
    };

    return calc;
  });
};
