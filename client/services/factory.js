var app = angular.module('eir.factory', []);

app.factory('patientsFactory', function ($http) {

  var getPatients = function() {
    return $http.get('/classes/patients')
      .then(function(res) {
        return res.data
      })
      .catch(function(err) {
        console.log('ERROR getPatients: ' + err);
      });
  };

  var getPatient = function(id) {
    return $http.get('/classes/patients/' + id)
      .then(function(res) {
        return res.data
      })
      .catch(function(err) {
        console.log('ERROR getPatient: ' + err);
      });
  };


  // getDonors
    // get request

  // getCondition
    // get request

  // submitDonationForm
    // post request
    // send back all the info in the post request
      // on response, display their donation info

  // submitPatientForm
    // post request
    // send back all the info in the post request
      // on response, display the patient's info




  return {
    getPatients: getPatients,
    getPatient: getPatient
  }


  


});
