'use strict';

angular.module('todoProjectApp.reves',[])
  .filter('reves', () => {
    return function (input) {
      let words=input.split(' ');
      let invert=words.reverse();
      return 'INVERTED:'+invert.join('-');
    };
  });
