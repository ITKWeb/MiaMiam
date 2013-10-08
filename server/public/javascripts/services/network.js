app.factory("Network", ["$http",
    function ($http) {
  
    var isMocked = false;
    var isLoginMocked = false;

    var peopleList = [
	{ "name":"Marc", "Cars":[{"name":"Dacia", "usedByDefault":true , "places": ["Normal","Normal","Normal","Unconfortable","Unconvenient"]}] },
{ "name":"Michele"},
{ "name":"Bastien", "Cars":[{"name":"Voiture 1", "usedByDefault":true , "places": ["Normal","Normal","Normal","Normal","Normal"]}, {"name":"Camion", "usedByDefault":false , places: ["Normal","Normal","Normal","Unconfortable","Unconfortable","Unconfortable","Unconfortable","Unconfortable"]}]},
{ "name":"Guillaume"},
{ "name":"Marine", "Cars":[{"name":"Voiture Marine", "usedByDefault":true , "places": ["Normal","Normal","Normal","Normal","Unconfortable"]}]},
{ "name":"Romain", "Cars":[{"name":"Voiture Romain", "usedByDefault":false , "places": ["Normal","Normal","Normal","Normal"]}]},
{ "name":"Cuong"},
{ "name":"Nelly"}
    ];

	function getPeopleList(callback) {
		callback(peopleList);
	}

	function addUser(user){
	    console.log(user);
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
