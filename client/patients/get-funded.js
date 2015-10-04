angular.module('eir.getFunded', [])


// .directive('fileModel', function($parse) {
//   return {
//     restrict: 'A',
//     link: function(scope, element, attrs) {
//       var model = $parse(attrs.fileModel);
//       var modelSetter = model.assign;

//       element.bind('change', function() {
//         scope.$apply(function() {
//           modelSetter(scope, element[0].files[0]);
//         });
//       });
//     }
//   };
// })

.controller('getFundedCtrl', function ($scope, patientsFactory, fileUpload) {

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
      fileUpload.uploadFileToUrl($scope.patient);
    }

  }
})

