app.factory("Network", ["$http", "$location",
    function ($http, $location) {
  
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
	  if (isMocked === true) {
		callback(peopleList);
	}else{
	   $http.get("/userlist")
          .success(callback)
          .error(
            function(data, status, headers, config) {
              console.log("erreur");
            }
          );
		
	
	}
	  
	  
		
	}

	function addUser(user){
	    console.log(user);
	    $http.post("/adduser", user);
	    $location.path("/peopleList");
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
