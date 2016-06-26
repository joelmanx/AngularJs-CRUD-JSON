'use strict';
(function(){

class TodoDetailComponent {
  constructor($stateParams) {

  	this.detailTodos=[
  		{id:'1',detail:'Must learn es6 with best practices'},
    	{id:'2',detail:'Must learn github with best practices'},
    	{id:'3',detail:'Must learn npm with best practices'}
    ];

    this.detail="Detail Empty";

  	if($stateParams.idItem){
  		let todoId=$stateParams.idItem;
  		let res=this.detailTodos.find(el=>(el.id===todoId));
  		if(res)
  			this.detail=res.detail;
  	} 
  }
}

angular.module('todoProjectApp')
  .component('todoDetail', {
    templateUrl: 'app/todoDetail/todoDetail.html',
    controller: TodoDetailComponent
  });

})();
