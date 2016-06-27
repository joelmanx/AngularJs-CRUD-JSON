'use strict';
(function(){

class TodoDetailComponent {
  constructor($stateParams,todoListService) {

  	this.detailTodos=[];
    this.detail="Detail Empty";

    let idItem=$stateParams.idItem;

    todoListService.getDetailTodo(idItem)   
    .then(response=>{
          if(response!==null) { this.detail=response.detail; }      
    	} 
    )
    .catch(e=>console.log(e));  
  }
}

TodoDetailComponent.$inject=['$stateParams','todoListService'];

angular.module('todoProjectApp')
  .component('todoDetail', {
    templateUrl: 'app/todoDetail/todoDetail.html',
    controller: TodoDetailComponent
  });

})();
