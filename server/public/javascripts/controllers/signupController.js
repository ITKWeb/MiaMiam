app.controller('SignupController', ['$scope', 'Network', '$location', function($scope, $network, $location) {

    $scope.user = {
	Name:undefined,
	Cars:[]
    }

    $scope.addCar = function(){
	$scope.user.Cars.push({
	    Name:undefined,
	    usedByDefault:false,
            Places:['Normal']
	});

    }

    $scope.addPlace = function(car){
	car.Places.push('Normal');
    }

    $scope.validate = function(){
	$network.addUser($scope.user);
    }
}]);
