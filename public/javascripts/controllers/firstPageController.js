app.controller('firstPageController', ['$scope', 'Network', '$location', function($scope, $network, $location) {


    $scope.clickOnNewMeal = function() {
		$location.path('/meal');
    }

	
	$scope.clickSignUp = function() {
		$location.path("/signup");
	}

}]);
