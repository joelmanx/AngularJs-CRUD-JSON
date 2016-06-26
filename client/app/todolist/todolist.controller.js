'use strict';
(function(){

class TodolistComponent {
  constructor($filter) {
    this.message = 'Hello Everybody';
    this.message_reves=$filter('reves')(this.message);

    this.alltodos=[
    	{text:'LEARn es6',done:false},
    	{text:'learn GIThub',done:false},
    	{text:'LEARN npm',done:true},
    	{text:'learn node',done:false},
    	{text:'LEARN ANGULAR',done:false},
    	{text:'leARN less',done:false},
    	{text:'lEaRN css',done:false},
    	{text:'learn BootStrap',done:false},
    	{text:'learn HTML5',done:false},
    	{text:'learn BOWER',done:false}
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
