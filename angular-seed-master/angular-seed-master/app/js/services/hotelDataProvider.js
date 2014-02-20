myApp.factory('hotelDataProvider', function($http, $q)
{
	return{
		getHotels : function(){
			var deferred = $q.defer();

			$http({method:'GET', url:'data/hotels'})
			.success(function(data, status, headers, config)
			{
				deferred.resolve(data);
			})
			.error(function(data, status, headers, config){
				deferred.reject(data);
			});

			return deferred.promise;

		}
	}
})