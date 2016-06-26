'use strict';

angular.module('todoProjectApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('todoDetail', {
        url: '/todoDetail/:idItem',
        template: '<todo-detail></todo-detail>'
      });
  });
