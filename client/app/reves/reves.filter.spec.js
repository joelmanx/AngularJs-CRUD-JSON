'use strict';

describe('Filter: reves', function () {

  // load the filter's module
  beforeEach(module('todoProjectApp.reves'));

  // initialize a new instance of the filter before each test
  var reves;
  beforeEach(inject(function ($filter) {
    reves = $filter('reves');
  }));

  it('should return the input prefixed with "reves filter:"', function () {
    var text = 'angularjs';
    expect(reves(text)).to.equal('reves filter: ' + text);
  });

});
