angular.module('eir.getFunded', [])


.directive('fileModel', function($parse) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      var model = $parse(attrs.fileModel);
      var modelSetter = model.assign;

      element.bind('change', function() {
        scope.$apply(function() {
          modelSetter(scope, element[0].files[0]);
        });
      });
    }
  };
})

.controller('getFundedCtrl', function ($scope, patientsFactory, fileUpload) {

  $scope.patient = {};

  // when patient clicks submit button when they sign up
  $scope.handleSubmit = function(newPatient) {

    // invoke the this method and pass in the form submission data
    patientsFactory.submitPatientForm(newPatient)
      .then(function(res) {

        // reset the patient form upon submission
        $scope.patient = {};

        $scope.uploadFile = function() {
          var file = $scope.profilePic;
          console.log('file is ');
          console.log(file);
          var uploadUrl = '/classes/patients';
          fileUpload.uploadFileToUrl(file, uploadUrl);
        };
          
      })
      .catch(function(err) {
        console.log(err);
      });
  }
})

