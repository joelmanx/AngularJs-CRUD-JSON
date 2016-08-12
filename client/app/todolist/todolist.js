'use strict';

angular.module('todoProjectApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('todolist', {
        url: '/todolist',
        template: '<todolist></todolist>'
      });
  });