'use strict';

/**
 * @ngdoc overview
 * @name pmaApp
 * @description
 * # pmaApp
 *
 * Main module of the application.
 */
angular
  .module('pmaApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'duScroll',
    'slickCarousel',
    'gridster'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
.value('duScrollOffset', 10);