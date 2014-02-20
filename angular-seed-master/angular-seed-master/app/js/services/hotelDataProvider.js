myApp.factory('hotelDataProvider', function($http)
{
	return{
		getHotels : function(){
			$http({method:'GET', url:'data/hotels'})
			.success(function(data, status, headers, config)
			{
				alert('success');	
			})
			.error(function(data, status, headers, config){
				alert('failed ' + status);
			});

		}
	}
})