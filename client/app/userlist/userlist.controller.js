'use strict';

(function(){

class UserlistComponent {
  
  constructor() {
    this.nombre= "JUAN";
    this.message = 'Hello';
    console.log("now");
  }

  open_modal(){
    console.log("click");
    window.alert("clicl");
  }
}

angular.module('todoProjectApp')
  .component('userlist', {
    templateUrl: 'app/userlist/userlist.html',
    controller: UserlistComponent,
    controllerAs: 'userlistCtrl'
  });
  

})();
