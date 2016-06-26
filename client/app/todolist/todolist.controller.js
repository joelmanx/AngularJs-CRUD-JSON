'use strict';
(function(){

class TodolistComponent {
  constructor($filter) {
    this.message = 'Hello Everybody';
    this.message_reves=$filter('reves')(this.message);

    this.alltodos=[
    	{id:'1',text:'LEARn es6',done:false},
    	{id:'2',text:'learn GIThub',done:false},
    	{id:'3',text:'LEARN npm',done:true},
    	{id:'4',text:'learn node',done:false},
    	{id:'5',text:'LEARN ANGULAR',done:false},
    	{id:'6',text:'leARN less',done:false},
    	{id:'7',text:'lEaRN css',done:false},
    	{id:'8',text:'learn BootStrap',done:false},
    	{id:'9',text:'learn HTML5',done:false},
    	{id:'10',text:'learn BOWER',done:false}
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
