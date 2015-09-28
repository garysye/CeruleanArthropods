angular.module('eir', ['eir.home', 'eir.profile', 'eir.donate', 'eir.about', 'ngRoute'])

// ben test -- delete this comment

.config(function($routeProvider) {
  $routeProvider
  .when('/home', {
    templateUrl: '/home/home.html',
    controller: 'homeCtrl'
  })
  .when('/about', {
    templateUrl: '/about/about.html'
    controller: 'aboutCtrl'
  })
  .when('/patients', {
    templateUrl: '/patients/patients.html'
    controller: 'patientsCtrl'
  })
  .when('/get-funded', {
    templateUrl: '/patients/get-funded.html'
    controller: 'getFundedCtrl'
  })
  .when('/patients/:id', {
    templateUrl: '/patients/:id.html'
    controller: 'patientProfileCtrl'
  })
  .when('/donate/:id', {
    templateUrl: '/donate/:id.html'
    controller: 'donateCtrl'
  })
  .when('/thank-you', {
    templateUrl: '/thank-you.html'
    controller: 'thankYouCtrl'
  })
  .otherwise({ 
    redirectTo: '/home' 
  });
});
