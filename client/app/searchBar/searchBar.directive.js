'use strict';

angular.module('todoProjectApp.searchBar',[]) 
  .directive('searchBar', function () {
    return {
      templateUrl: 'app/searchBar/searchBar.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {

      	let theinput=element.find('input');
      	let theButton=element.find('.btn-warning');

      	scope.mysearch={text:'gith'};
      	scope.serchingMessage='Your Search is :';
      	scope.clearField=function(){
      		scope.mysearch={text:''} 		
      	};



      	// yo can add event listeners and modify the dom with jqLite
      	theButton.on('mouseenter',()=>{
      		theinput.addClass('justforFun');
      	});

  		theButton.on('mouseout',()=>{
      		theinput.removeClass('justforFun');
      	});

      }
    };
  });
