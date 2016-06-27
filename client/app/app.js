'use strict';

angular.module('todoProjectApp', [
  'todoProjectApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ngAnimate',
  'todoProjectApp.reves',
  'todoProjectApp.searchBar'  
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
