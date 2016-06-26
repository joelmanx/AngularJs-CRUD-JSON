'use strict';
(function(){

class TodolistComponent {
  constructor($filter,$http) {
    this.message = 'Hello Everybody';
    this.message_reves=$filter('reves')(this.message);
    this.alltodos=[];
    $http.get('app/data/todos.json')
    .then(response=>{
    	this.alltodos=response.data;
    })
    .catch(e=>console.log(e));   
  }
}

TodolistComponent.$inject=['$filter','$http'];

angular.module('todoProjectApp')
  .component('todolist', {
    templateUrl: 'app/todolist/todolist.html',
    controller: TodolistComponent,
    controllerAs: 'vm'
  });

})();
