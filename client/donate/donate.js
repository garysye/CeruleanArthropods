angular.module('eir.donate', ['ngRoute'])

.controller('donateCtrl', function ($scope, patientsFactory, donorsFactory, $routeParams) {

  $scope.patient = {};
  $scope.donor = {};

  // this will allow you to display patient info on the donate page
  patientsFactory.getPatient($routeParams.id)
    .then(function(res) {
      console.log(res)
      $scope.patient.id = res[0].id;
      $scope.patient.email = res[0].email;
      $scope.patient.first_name = res[0].first_name;
      $scope.patient.last_name = res[0].last_name;
      $scope.patient.bio = res[0].bio;
      $scope.patient.goal = res[0].goal;
      $scope.patient.progress = res[0].progress;
      $scope.patient.funded = res[0].funded;
      $scope.patient.condition_id = res[0].condition_id;
      $scope.patient.photo_id = res[0].photo_id;
    })
    .catch(function(err) {
      console.log('ERROR patientsFactory.getPatient: ' + err);
    });

  // on form submit, send the new donor info to the server; POST req
  $scope.handleSubmit = function(newDonor) {

    donorsFactory.submitDonationForm(newDonor, $routeParams.id)
      .then(function(res) {
        $scope.donor.donorFirst = newDonor.first_name;
        $scope.donor.donorFirst = newDonor.last_name;
        $scope.donor.donorFirst = newDonor.email;
        $scope.donor.donorFirst = newDonor.amount;
        $scope.donor.donorFirst = newDonor.patient_id;
      })
      .catch(function(err) {
        console.log('ERROR donorsFactory.submitDonationForm: ' + err)
      });
  };
});
