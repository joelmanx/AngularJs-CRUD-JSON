'use strict';
(function(){

class TodolistComponent {
  constructor() {
    this.message = 'Hello';
    this.alltodos=[
    	{text:'learn es6',done:false},
    	{text:'learn github',done:false},
    	{text:'learn npm',done:false},
    	{text:'learn node',done:false},
    	{text:'learn angular',done:false},
    	{text:'learn less',done:false},
    	{text:'learn css',done:false},
    	{text:'learn bootstrap',done:false}
    ];
  }
}

angular.module('todoProjectApp')
  .component('todolist', {
    templateUrl: 'app/todolist/todolist.html',
    controller: TodolistComponent,
    controllerAs: 'vm'
  });

})();
