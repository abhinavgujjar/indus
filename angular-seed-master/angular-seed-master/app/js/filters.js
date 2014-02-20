'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]);

  myApp.filter('toRupees', function (){
  	return function(dollarRate){
  		return dollarRate * 60;
  	}
  });

  myApp.filter('categories', function (){
  	return function(rate){
  		if (rate > 100000)
  			return 'Luxury';
		if (rate > 50000)
  			return 'Premium';
  		if (rate > 20000)
  			return 'Regular';
  		
  		return 'Lodge';
  	}
  });

