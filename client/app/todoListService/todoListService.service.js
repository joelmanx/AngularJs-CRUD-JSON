'use strict';


class todoListService{
	constructor($http){
		this.http=$http;
	}
	getAllTodos(){
	  	 return this.http.get('app/data/todos.json');
    }
    getDetailTodo(id){    	
    	console.log('getting in service detail');
    	return 	this.http.get('app/data/detailTodos.json')
		    	.then(response=>{
		    		let detailTodos=response.data;
			  		let res=detailTodos.find(el=>(el.id===id));
			  		if(res)
			  			return res;
			  		return null;
		    	})
		    	.catch(err=>new Error('Error getting detailTodos in Service'));
    }
}

todoListService.$inject=['$http'];

angular.module('todoProjectApp.todoListService',[])
  .service('todoListService', todoListService);



