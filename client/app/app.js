'use strict';

angular.module('todoProjectApp', [
  'todoProjectApp.constants',
  'ui.bootstrap',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ngAnimate',
  'todoProjectApp.reves',
  'todoProjectApp.searchBar',
  'todoProjectApp.todoListService'  
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
