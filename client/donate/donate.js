angular.module('eir.donate', ['ngRoute'])

.controller('donateCtrl', function ($scope, patientsFactory, donorsFactory, $routeParams, conditionFactory) {

  $scope.patient = {};
  $scope.donor = {};

  // this will allow you to display patient info on the donate page
  patientsFactory.getPatient($routeParams.id)
    .then(function(res) {
      $scope.patient = res[0];
      $scope.getConditionName();

      console.log($scope.patient);
      
      if($scope.patient.progress === 0) {
        $scope.text = "Be the first to donate towards " + $scope.patient.first_name + "'s cause!";
      } else {
        $scope.text = "Let's reach " + $scope.patient.first_name + "'s goal!";
      }
    
    })
    .catch(function(err) {
      console.log('ERROR patientsFactory.getPatient: ' + err);
    });

  // called after patient reocrd is returned. condtion is in a seperate table 
  $scope.getConditionName = function() {
    conditionFactory.getCondition($scope.patient.condition_id)
      .then(function (res){
        var conditionName = res[0].condition_name;
        $scope.patient.condition_name = conditionName;
      })
      .catch(function (err){
        console.warn('Err donateCtrl - could not find condition name: ', err);
      });
  };

  // on form submit, send the new donor info to the server; POST req
  $scope.handleSubmit = function(newDonor) {
    newDonor.patient_id = $routeParams.id;

    donorsFactory.submitDonationForm(newDonor)
      .then(function(res) {
        $scope.donor = {};

      })
      .catch(function(err) {
        console.log('ERROR donorsFactory.submitDonationForm: ', err)
      });
  };


});
