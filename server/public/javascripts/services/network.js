app.factory("Network", ["$http", "$location",
    function ($http, $location) {
  
    var isMocked = false;
    var isLoginMocked = false;
    var isPeopleListMocked = false;

    var peopleList = [
        { "Name":"Marc", "Cars":[{"name":"Dacia", "usedByDefault":true , "places": ["Normal","Normal","Normal","Unconfortable","Unconvenient"]}] },
        { "Name":"Michele"},
        { "Name":"Bastien", "Cars":[{"name":"Voiture 1", "usedByDefault":true , "places": ["Normal","Normal","Normal","Normal","Normal"]}, {"name":"Camion", "usedByDefault":false , places: ["Normal","Normal","Normal","Unconfortable","Unconfortable","Unconfortable","Unconfortable","Unconfortable"]}]},
        { "Name":"Guillaume"},
        { "Name":"Marine", "Cars":[{"name":"Voiture Marine", "usedByDefault":true , "places": ["Normal","Normal","Normal","Normal","Unconfortable"]}]},
        { "Name":"Romain", "Cars":[{"name":"Voiture Romain", "usedByDefault":false , "places": ["Normal","Normal","Normal","Normal"]}]},
        { "Name":"Cuong"},
        { "Name":"Nelly"}
    ];

	function getPeopleList(callback) {
    	  if (isMocked === true) {
    		callback(peopleList);
    	}else{
                 console.log("into network private getPeopleList isPeopleListMocked FALSE");
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
        console.log("into network public getPeopleList");
        getPeopleList(callback);
    },

    addUser: function(user) {
	addUser(user);
    }
 };

}]);
