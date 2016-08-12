'use strict';

angular.module('todoProjectApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('todoDetail', {
        url: '/todoDetail/:id',
        template: '<todo-detail></todo-detail>'
      });
  });
