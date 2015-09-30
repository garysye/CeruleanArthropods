angular.module('eir.getFunded', [])

.controller('getFundedCtrl', function ($scope, patientsFactory) {

  $scope.patient = {};

  patientsFactory.submitPatientForm()

  $scope.update = function(patient) {

  };
});
