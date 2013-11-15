app.factory("Network", ["$http",
    function ($http) {
  
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
        console.log("into network private getPeopleList");
        if (isPeopleListMocked === true){
          console.log("into network private getPeopleList isPeopleListMocked");
		  callback(peopleList);
        } else{
            console.log("into network private getPeopleList isPeopleListMocked FALSE");
            
        }
	}

	function addUser(user){
	    console.log(user);
	    $http.post("http://localhost:3000/adduser", user);
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
