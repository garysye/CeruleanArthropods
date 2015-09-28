angular.module('eir', ['eir.home', 'ngRoute'])

// ben test -- delete this comment

.config(function($routeProvider) {
  $routeProvider
  .when('/home', {
    templateUrl: '/home/home.html',
    controller: 'homeCtrl'
  })
  // .when('/about', {
  //   templateUrl:
  //   controller:
  // })
  // .when('/patients', {
  //   templateUrl:
  //   controller:
  // })
  // .when('/donation', {
  //   templateUrl:
  //   controller:
  // })
  // .when('/signup', {
  //   templateUrl:
  //   controller:
  // })
  
  // .when('/login', {
  //   templateUrl:
  //   controller:
  // })
  .otherwise({ 
    redirectTo: '/home' 
  });
});
