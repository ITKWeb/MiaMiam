var app = angular.module('app', []);

app.config(["$routeProvider", "$httpProvider",
  function($routeProvider, $httpProvider) {
    $httpProvider.defaults.headers['common']['Accept'] = 'application/json';
    $routeProvider
      .when('/', {
        templateUrl: 'views/firstPage.html',
        controller: "firstPageController"
      })
       .when('/meal', {
            templateUrl: 'views/meal.html',
          
        })

      .otherwise({
        redirectTo: '/'
      });
  }
]);
