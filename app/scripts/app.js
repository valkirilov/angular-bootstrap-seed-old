'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'ngCookies',
    'ngRoute',
    'ngAnimate',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers',
    //'restangular',
    'ui.bootstrap',
    //'chieffancypants.loadingBar',
    'gettext',
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'AboutController'});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'AboutController'});
    $routeProvider.otherwise({redirectTo: '/view1'});
}]);
