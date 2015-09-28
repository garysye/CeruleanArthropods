angular.module('eir.factory', [])

.factory('patientsFactory', function ($http) {

  var patients;

  var getPatients = function() {
    $http.get('/classes/patients')
    .success(function(data) {
      patients = data;
    })
    .error(function(data) {
      console.log("Error: " + data);
    })
  };

  return {
    patients: patients
  }


  


});
