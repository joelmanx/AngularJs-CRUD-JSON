'use strict';

(function() {

class MainController {
  constructor() {
      this.awesomeThings = ['sas','fasdf','gfgf'];
  }
}

angular.module('todoProjectApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

})();
