var patientController = require('./patientController.js')

module.exports = function (router) {

//Routes requests to patientController
router.route('/')
  .get(patientController.getPatients)
  .post(patientController.postPatient)

}
