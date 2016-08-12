'use strict';
let $_q;
class todoListService{
	
	constructor($http,$q){
		this.http=$http;
		$_q=$q;
	}

	getAllTodos(){
		//return this.http.get("https://jsonplaceholder.typicode.com/posts");
	  	 //return this.http.get('app/data/todos.json');		
		   return $_q(function(resolve, reject){
			  resolve(JSON.parse(localStorage.getItem("bd")));
		   });
    }

    getDetailTodo(id){    	
    	console.log('getting in service detail');
		return $_q(function(resolve, reject){
			let post=((JSON.parse(localStorage.getItem("bd")))
					.filter(el=>(el.idPost==id)))[0];
			  console.log("post: "+post);
			  resolve(post);
		   });
    }

	updatePost(idPost, title, body){    	
    	console.log('updating Post in service');
		/** para usarlo con un restfull service
		  var dats = {        
					id: idPost,    
					title: title,
					body: body,
					userId: 1                
                };
		this.http.put("https://jsonplaceholder.typicode.com/posts/"+idPost, dats)
			.then(response => {
                    if (response.status !== 200) {
                        response.statusCode = response.status;
                        response.data = response;						
                    }
					console.log(response.statusCode);
                    return response;
                });
		 */
		/** para usarlo con localStorage */
		var postElement = {        
					idPost: idPost,    
					title: title,
					body: body,
					userId: 1
				};
		let bdStorage=JSON.parse(localStorage.getItem("bd"));
		let indexPost= bdStorage.map(el=>(el.idPost==idPost)).indexOf(true);
		
		console.log("post: "+idPost+"indexOf post in the Array: "+indexPost);
		var postsUpdated=bdStorage.splice(indexPost,1, postElement);
		/*var postsUpdated=bdStorage.filter(el=>(el.idPost!==idPost));
		postsUpdated.push(postElement);*/
		console.log(bdStorage);
		console.log(postsUpdated);
		window.localStorage.setItem("bd",JSON.stringify(bdStorage));
    }

	addPost(title, body){    	
    	console.log('adding Post in service');
		let idPost= parseInt(localStorage.getItem("idPost"))+1;
		window.localStorage.setItem("idPost",idPost);
		var dats = {      
					idPost: idPost,    
					title: title,
					body: body,
					userId: 1                
                };
		var bdStorage = JSON.parse(localStorage.getItem("bd"));
		//console.log(dats);
		bdStorage.push(dats);
		console.log(bdStorage);
		/*var bdStorage=[
			{
				title: "an Post",
				body: "a detail Post",
				userId: 1  
			},
			{
				title: title,
					body: body,
					userId: 1 
			}
		];*/
		//window.localStorage.setItem("state","New Post");
		//window.localStorage.setItem("title",title);
		//window.localStorage.setItem("body",body);s
		window.localStorage.setItem("bd",JSON.stringify(bdStorage));
		this.http.post("https://jsonplaceholder.typicode.com/posts/", dats)
			.then(response => {
                    if (response.status !== 200) {
                        response.statusCode = response.status;
                        response.data = response;						
                    }
					console.log(response.statusCode);
                    return response;
                });
		
    }

	deletePost(idPost){    	
    	console.log('deleting Post in service');
		let bdStorage=JSON.parse(localStorage.getItem("bd"));
		let indexPost= bdStorage.map(el=>(el.idPost==idPost)).indexOf(true);
		
		console.log("post: "+idPost+"indexOf post in the Array: "+indexPost);
		var postsUpdated=bdStorage.splice(indexPost,1);
		/*var postsUpdated=bdStorage.filter(el=>(el.idPost!==idPost));
		postsUpdated.push(postElement);*/
		console.log(bdStorage);
		console.log(postsUpdated);
		window.localStorage.setItem("bd",JSON.stringify(bdStorage));
    }
}

todoListService.$inject=['$http','$q'];

angular.module('todoProjectApp.todoListService',[])
  .service('todoListService', todoListService);



