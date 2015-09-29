// TODO: complete this when controller is built
var patientController = require('./patientController.js');

module.exports = function (router) {

//Routes requests to patientController
//TODO: uncomment these when patient controller is built

router.route('/')
  .get(patientController.getPatients)
  .post(patientController.addNewPatient);

router.param('id', function (req,res,next,id){
  req.id = id;
  next();
});

router.get('/:id', patientController.getPatientById);

};
