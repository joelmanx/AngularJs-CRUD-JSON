'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
    },
    {
      'title':'TodoList',
      'state':'todolist'
    }
  ];

  isCollapsed = true;
  //end-non-standard

  constructor() {
    }
}

angular.module('todoProjectApp')
  .controller('NavbarController', NavbarController);
