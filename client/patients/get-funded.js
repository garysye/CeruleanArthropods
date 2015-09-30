angular.module('eir.getFunded', [])

.controller('getFundedCtrl', function ($scope, patientsFactory) {

  $scope.patient = {};

  $scope.handleSubmit = function(newPatient) {
    // on form submit you need to send the new patient's info to the server
    // 
  };

  patientsFactory.submitPatientForm()

  $scope.addNewPatient = function(patient) {

  };
});
