'use strict';

require('angular/angular');
require('angular-route');

var avgApp = angular.module('avgApp', ['ngRoute']);

// service(s)
require('./services/calc-service')(avgApp);

// directive(s)
require('./directives/avg-display-directive')(avgApp); // contains controller
