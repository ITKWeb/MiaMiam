app.factory("Network", ["$http",
    function ($http) {
  
    var isMocked = false;
    var isLoginMocked = false;

/*    var people = [{"id":1,"nom":"LauLau","Voiture":"Oui","nbPlaces":"4"}, 
          {"id":2,"nom":"Roro","Voiture":"Oui","nbPlaces":"3"}, 
          {"id":3,"nom":"Elvis","Voiture":"Non"}];*/

    function newMeal() {
		$http.post("/meal");
    }
    
 return {
	newMeal: function(){
		newMeal();
	}
 };

}]);
