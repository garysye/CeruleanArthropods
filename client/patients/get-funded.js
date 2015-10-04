angular.module('eir.getFunded', [])


.controller('getFundedCtrl', function ($scope, patientsFactory, fileUpload, $location) {

  $scope.patient = {};

  $scope.uploadFile = function(inputFile) {
    var file = inputFile.files[0];
    var reader = new FileReader();
    $scope.patient.photo = file;
  };

  // when patient clicks submit button when they sign up
  $scope.handleSubmit = function(newPatient) {
    var form = $scope.patientForm;

    // only submit if form is valid
    if(form.$valid) {
      fileUpload.uploadFileToUrl($scope.patient)
        .then(function (res){
          // redirect patient to their new page
          $location.path('/donate/' + res.data.insertId);
        })
        .catch(function (err){
          console.log('error adding patient', err);
          // TODO: - handle mysql error and display info next to form inputs
        })
    }

  }
})

