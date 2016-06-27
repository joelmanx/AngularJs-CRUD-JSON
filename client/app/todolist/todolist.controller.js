'use strict';
(function(){

class TodolistComponent {
  constructor($filter,todoListService) {
    this.message = 'Hello Everybody';
    this.message_reves=$filter('reves')(this.message);
    this.alltodos=[];

    todoListService.getAllTodos()
    .then(response=>{    
    	this.alltodos=response.data;
    })
    .catch(e=>console.log(e));   
  }
}

TodolistComponent.$inject=['$filter','todoListService'];

angular.module('todoProjectApp')
  .component('todolist', {
    templateUrl: 'app/todolist/todolist.html',
    controller: TodolistComponent,
    controllerAs: 'vm'
  });

})();
