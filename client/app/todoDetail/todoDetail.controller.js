'use strict';
(function(){

class TodoDetailComponent {
  constructor($stateParams,$http) {

  	this.detailTodos=[];
    this.detail="Detail Empty";

    let idItem=$stateParams.idItem;

    $http.get('app/data/detailTodos.json?id='+idItem)
    .then(response=>{
    	this.detailTodos=response.data;
	  	if(idItem){
	  		let todoId=$stateParams.idItem;
	  		let res=this.detailTodos.find(el=>(el.id===todoId));
	  		if(res)
	  			this.detail=res.detail;
	  	} 
    })
    .catch(e=>console.log(e));  
  }
}

TodoDetailComponent.$inject=['$stateParams','$http'];

angular.module('todoProjectApp')
  .component('todoDetail', {
    templateUrl: 'app/todoDetail/todoDetail.html',
    controller: TodoDetailComponent
  });

})();
