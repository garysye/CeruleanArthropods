angular.module('eir.patients', [])

.controller('patientsCtrl', function($scope, patientsFactory) {

  $scope.patients = patientsFactory.patients;

  // $scope.patients = {
  //   patients: [],
  //   getPatients: function() {}
  //   
  // }

  $scope.leftToFund = function() {

    for(var i = 0; i < $scope.patients.length; i++) {
      leftToFund = $scope.patients[i].goal - $scope.patients[i].progress
      $scope.patients[i].leftToFund = leftToFund;
    }

  }

  $scope.leftToFund();

  



});
