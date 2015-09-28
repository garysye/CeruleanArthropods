angular.module('eir.factory', [])

.factory('patientsFactory', function ($http) {

  var patients = [];

  var getPatients = function() {
    $http.get('/classes/patients')
    .success()
    .error()
  };


  return {
    patients: patients,
    getPatients: getPatients
  }


  


});
