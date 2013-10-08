app.factory("Network", ["$http",
    function ($http) {
  
    var isMocked = false;
    var isLoginMocked = false;

    var peopleList = [
    {"name": "Marine",
    "surname": "Miquet", "car": "Twingo de noël", "places": 3},
    {"name": "Jérémy",
    "surname": "Flusin", "car": "Non", "places": 0}
    ];

	function getPeopleList(callback) {
		callback(peopleList);
	}

	function addUser(user){
	    $http.post("http://localhost:3000/adduser", user);
	}
    
 return {
    getPeopleList: function(callback) {
        getPeopleList(callback);
    },

    addUser: function(user) {
	addUser(user);
    }
 };

}]);
