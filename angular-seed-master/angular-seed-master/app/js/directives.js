'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);

myApp.directive('ticks', function(){
	return {
		restrict: 'E',
		template : "<div ng-repeat='a in items' ><span class='glyphicon glyphicon-ok'></span><span class='label label-default' >{{a}}</span></div>",
		scope:{
			items: "="
		}
	}
});