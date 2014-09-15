'use strict';

require('angular/angular');
require('angular-route');

var avgApp = angular.module('avgApp', ['ngRoute']);

// controller(s)
require('./controllers/avg-controller')(avgApp);

// filter(s)

// service(s)

// directive(s)

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
