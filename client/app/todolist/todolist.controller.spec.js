'use strict';

describe('Component: TodolistComponent', function () {

  // load the controller's module
  beforeEach(module('todoProjectApp'));

  var TodolistComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    TodolistComponent = $componentController('TodolistComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
