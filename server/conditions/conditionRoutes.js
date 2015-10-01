var conditionController = require('./conditionsController.js');

module.exports = function (router) {

//Routes requests to specific controller methods
// router.route('/')
//TODO: uncomment these when patient controller is built
  // .get(conditionController.getConditions)

//looks for "id" parameter and if there is a match 
router.param('id', function (req, res, next, id){
  req.id = id;
  next();
});


router.route('/:id')
  .get(conditionController.getConditionById)
}
