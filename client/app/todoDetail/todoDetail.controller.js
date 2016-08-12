'use strict';
(function(){

let services=null;
let _state=null;
class TodoDetailComponent {  
  constructor($stateParams,todoListService,$state) {
    console.log();
    services= todoListService;
    _state=$state;
  	this.detailTodos=[];
    this.idPost=null;
    this.body="Detail Empty";
    this.title="Title Empty";
    this.titleWindow="View or Update detail Post";
    this.idItem=$stateParams.id;
    if(this.idItem == 0){
      this.titleWindow="Add new Post";
    }else{
      console.log("TotalDetailComponent Parameter: "+$stateParams.id);
      todoListService.getDetailTodo(this.idItem)   
      .then(response=>{
            if(response!==null) { 
              this.idPost=response.idPost;
              this.body=response.body; 
              this.title=response.title;  
          }      
        } 
      )
      .catch(e=>console.log(e));  
    }
    /*var bdStorage=[
			{
        idPost: 1,
				title: "an Post",
				body: "a detail Post",
				userId: 1  
			}
		];
    window.localStorage.setItem("idPost",1);
		window.localStorage.setItem("bd",JSON.stringify(bdStorage));*/
    
  }  
  updatePost(){
    //console.log("IDpOST: "+this.title);
    services.updatePost(this.idPost, this.title, this.body);
    _state.go("todolist",{});
  }

  addPost(){
    //console.log("IDpOST: "+this.title);
    services.addPost(this.title, this.body);
    _state.go("todolist",{});
  }
  
}

TodoDetailComponent.$inject=['$stateParams','todoListService','$state'];

angular.module('todoProjectApp')
  .component('todoDetail', {
    templateUrl: 'app/todoDetail/todoDetail.html',
    controller: TodoDetailComponent,
    controllerAs: 'td'
  });

})();
