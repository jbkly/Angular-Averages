'use strict';

require('angular/angular');
require('angular-route');

var avgApp = angular.module('avgApp', ['ngRoute']);

// controller(s)
require('./controllers/avg-controller')(avgApp);

// service(s)
require('./services/calc-service')(avgApp);

// directive(s)

// filter(s)

// router
avgApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/avg-view.html',
      controller: 'avgController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
