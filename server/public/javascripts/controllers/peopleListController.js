app.controller('peopleListController', ['$scope', 'Network', '$location', function($scope, $network, $location) {


    $network.getPeopleList ( function(peopleList) {
	   $scope.peopleList = peopleList;
	   console.log("peopleList");
    })


}]);
