'use strict';

// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', ['ngSanitize', 'ngRoute'])
.config(function($routeProvider){
	$routeProvider.when('/list',
	{
		templateUrl: 'templates/hotelsList.html',
		controller: 'MyCtrl1'
	});


	$routeProvider.when('/new',
	{
		templateUrl: 'templates/newHotel.html',
		controller: 'EditHotelCtrl'
	});

	$routeProvider.when('/details/:routeId',
	{
		templateUrl: 'templates/hotelDetails.html',
		controller: 'detailsController'
	});
	
});
