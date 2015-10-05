angular.module('eir.getFunded', [])


.controller('getFundedCtrl', function ($scope, patientsFactory, fileUpload, $location) {

  $scope.patient = {};

  $scope.uploadFile = function(inputFile) {
    var file = inputFile.files[0];
    $scope.patient.photo = file;
  };

  $scope.handleInvalidUsername = function() {
    // set property on error object to inuse
    $scope.patientForm.email.$setValidity('inuse', false);
    // reset form in prestine condition
    $scope.patientForm.email.$setPristine();
  };

  // when patient clicks submit button when they sign up
  $scope.handleSubmit = function(newPatient) {
    var form = $scope.patientForm;

    // only submit if form is valid
    if(form.$valid) {
      fileUpload.uploadFileToUrl($scope.patient)
        .then(function (res, err){
          // redirect patient to their new page
          $location.path('/donate/' + res.data.insertId);
        })
        .catch(function (err, res){
          // ** error adding new patient
          // send to username handler
          $scope.handleInvalidUsername();

          // TODO: - add different error handling routes
        })
    }

  }
})

