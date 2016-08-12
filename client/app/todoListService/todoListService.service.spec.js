'use strict';

describe('Service: todoListService', function () {

  // load the service's module
  beforeEach(module('todoProjectApp.todoListService'));

  // instantiate service
  var todoListService;
  beforeEach(inject(function (_todoListService_) {
    todoListService = _todoListService_;
  }));

  it('should do something', function () {
    expect(!!todoListService).to.be.true;
  });

});
