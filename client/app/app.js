'use strict';

angular.module('todoProjectApp', [
  'todoProjectApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'todoProjectApp.reves',
  'todoProjectApp.searchBar'  
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
