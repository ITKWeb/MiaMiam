app.controller('firstPageController', ['$scope', 'Network', '$location', function($scope, $network, $location) {


    $scope.clickOnNewMeal = function() {
        $network.newMeal(function() {
                $location.path('/meal');          
        })
    }


}]);