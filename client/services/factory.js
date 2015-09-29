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

  // submitPatientForm
    // post request -- patiendInfoObj
    // send back all the info (includ id) in the post response
      // on response, display the patient's info


// donors factory (donorsFactory)
  // submitDonationForm
    // post request -- donationInfoObj
    // send back all the info in the post request
      // on response, display their donation info
      
  // getDonors
    // get request
  // getDonor -- donor
    // get request



// condition factory (conditionFactory)
  // getCondition -- conditionID
    // get request




  return {
    getPatients: getPatients,
    getPatient: getPatient
    // 
    //
    //
    //
  }


  


});
