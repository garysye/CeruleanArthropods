var app = angular.module('eir', [
  'eir.factory',
  'eir.home', 
  'eir.about', 
  'eir.patients', 
  'eir.getFunded', 
  'eir.profile', 
  'eir.donate',
  'eir.thankYou', 
  'ui.bootstrap', 
  'ngRoute']
);

app.config(function($routeProvider) {
  $routeProvider
  .when('/home', {
    templateUrl: '/home/home.html',
    controller: 'homeCtrl'
  })
  .when('/about', {
    templateUrl: '/about/about.html',
    controller: 'aboutCtrl'
  })
  .when('/patients', {
    templateUrl: '/patients/patients.html',
    controller: 'patientsCtrl'
  })
  .when('/get-funded', {
    templateUrl: '/patients/get-funded.html',
    controller: 'getFundedCtrl'
  })
  .when('/profile', {
    templateUrl: '/profile/profile.html',
    controller: 'profileCtrl'
  })
  .when('/donate/:id', {
    templateUrl: '/donate/donate.html',
    controller: 'donateCtrl'
  })
  .when('/thank-you', {
    templateUrl: '/thank-you.html',
    controller: 'thankYouCtrl'
  })
  .otherwise({ 
    redirectTo: '/home' 
  });
});
