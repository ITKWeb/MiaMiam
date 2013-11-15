app.controller('firstPageController', ['$scope', 'Network', '$location', function($scope, $network, $location) {


    $scope.clickOnNewMeal = function() {
        $location.path('/peopleList');
    }

    $scope.clickSignUp = function() {
        $location.path("/signup");
    }

}]);
