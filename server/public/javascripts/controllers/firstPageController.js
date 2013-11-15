app.controller('firstPageController', ['$scope', 'Network', '$location', function($scope, $network, $location) {


    $scope.clickOnNewMeal = function() {
        console.log("clickOnNewMeal");
        $location.path('/peopleList');
    }

    $scope.clickSignUp = function() {
    	console.log("signup");
        $location.path("/signup");
    }

}]);
