myApp.controller('complexCtrl', function($scope) {
	
	$scope.allowNameInput = true;
	$scope.allowCountryInput = true;

	$scope.pageState = 'rest';

	$scope.$watch('pageState', function() {
		switch ($scope.pageState){
			case 'loading':
			$scope.allowNameInput = false;
			$scope.allowCountryInput = false;
			break;
			case 'rest':
			$scope.allowNameInput = true;
			$scope.allowCountryInput = true;
			break;
		}
	});

	$scope.startLoading = function()
	{
		$scope.pageState = 'loading';
	}

	$scope.cancel = function()
	{
		$scope.pageState = 'rest';
	}

	$scope.begin = function()
	{
		$scope.pageState = 'loading';
	}

});