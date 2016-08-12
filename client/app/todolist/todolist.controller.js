'use strict';
(function(){
let services=null;
let _state=null;
class TodolistComponent {
  constructor($filter,todoListService,$state) { 
    services=todoListService;   
    this.totalItems =200;
    this.itemsPerPage = 20;
    this.currentPage = 1;
    this.maxSize = 5;
    this.bigTotalItems = 175;
    this.bigCurrentPage = 1;
    _state=$state;
    this.message = 'Hello Everybody';
    this.message_reves=$filter('reves')(this.message);
    this.alltodos=[];

    todoListService.getAllTodos()
    .then(response=>{    
    	//this.alltodos=response.data;
      this.alltodos=response;
      console.log(response);
    })
    .catch(e=>console.log(e));  
    //this.alltodos=todoListService.getAllTodos();
    console.log("count++");
  }

  getDetail(item){
    console.log("idPost:"+item.id);
    
  }

  setPage (pageNo) {
    this.currentPage = pageNo;
  }

  pageChanged() {
    console.log('Page changed to: ' + this.currentPage);
  }

  deletePost(id){
    //console.log("IDpOST: "+this.title);
    if(window.confirm("Are you shure of delete the post selected?")){
      services.deletePost(id);
      //_state.go("todolist",{});
      services.getAllTodos()
      .then(response=>{    
        //this.alltodos=response.data;
        this.alltodos=response;
        console.log(response);
      })
      .catch(e=>console.log(e));  
    }
    
  }
}

TodolistComponent.$inject=['$filter','todoListService','$state'];

angular.module('todoProjectApp')
  .component('todolist', {
    templateUrl: 'app/todolist/todolist.html',
    controller: TodolistComponent,
    controllerAs: 'vm'
  });

})();
