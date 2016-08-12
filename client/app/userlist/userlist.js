'use strict';

angular.module('todoProjectApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('userlist', {
        url: '/userlist',
       // templateUrl: 'app/userlist/userlist.html'
        template: '<userlist></userlist>'
      });
  });
