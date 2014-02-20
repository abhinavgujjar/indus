myApp.controller('EditHotelCtrl', function($scope) {

	$scope.saveHotel = function(hotel, newHotelForm){

		yell();

		
		console.log(newHotelForm);
			if (newHotelForm.$valid )
			{
				alert('is valid');
			}
			else
			{
				alert('not valid');
			}

		//alert('saving the hotel');
	}
}
);
