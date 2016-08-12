'use strict';

describe('Component: UserlistComponent', function () {

  // load the controller's module
  beforeEach(module('user'));

  var UserlistComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    UserlistComponent = $componentController('userlist', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
