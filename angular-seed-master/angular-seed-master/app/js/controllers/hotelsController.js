myApp.controller('MyCtrl1', function($scope, hotelDataProvider) {
	$scope.upVote = function (hotel){
		hotel.rating ++;
	};

	$scope.downVote = function (hotel){
		hotel.rating--;
	};

	$scope.isErrorVisible = false;

	var promise = hotelDataProvider.getHotels();

	promise.then(function(data){
		$scope.hotels = data;
	});
}
);