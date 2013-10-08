app.controller('PeopleListController', ['$scope', 'Network', '$location', function($scope, $network, $location) {


    $network.getPeopleList ( function(peopleList) {
	   $scope.peopleList = peopleList;
    })


}]);
