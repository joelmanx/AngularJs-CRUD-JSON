'use strict';
(function(){

class TodolistComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('todoProjectApp')
  .component('todolist', {
    templateUrl: 'app/todolist/todolist.html',
    controller: TodolistComponent
  });

})();
