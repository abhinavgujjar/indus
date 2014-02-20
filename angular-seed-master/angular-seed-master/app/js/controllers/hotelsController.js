myApp.controller('MyCtrl1', function($scope, hotelDataProvider) {
	$scope.upVote = function (hotel){
		hotel.rating ++;
	};

	$scope.downVote = function (hotel){
		hotel.rating--;
	};

	$scope.hotels = hotelDataProvider.getHotels();
}
);