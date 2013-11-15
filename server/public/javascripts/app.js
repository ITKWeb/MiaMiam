var app = angular.module('app', []);

app.config(["$routeProvider", "$httpProvider",
  function($routeProvider, $httpProvider) {
    $httpProvider.defaults.headers['common']['Accept'] = 'application/json';
    $routeProvider
      .when('/', {
        templateUrl: 'views/firstPage.html',
        controller: "firstPageController"
      })
      .when('/peopleList', {
        templateUrl: 'views/peopleList.html',
        controller: "peopleListController"
      })	  
      .when('/signup', {
        templateUrl: 'views/signup.html',
	controller: "signupController"
      })	  

      .otherwise({
        redirectTo: '/'
      });
  }
]);
