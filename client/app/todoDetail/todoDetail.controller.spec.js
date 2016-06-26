'use strict';

describe('Component: TodoDetailComponent', function () {

  // load the controller's module
  beforeEach(module('todoProjectApp'));

  var TodoDetailComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    TodoDetailComponent = $componentController('TodoDetailComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
