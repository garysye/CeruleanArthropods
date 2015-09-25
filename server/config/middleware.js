var morgan = require('morgan');
var bodyParser = require('body-parser');

module.exports = function (app, express) {

  var patientRouter = express.Router();

//Serve up static files in client folder and other middleware
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/client'));

//Routes patients traffic to patientRouter and injects the router into its route file
  app.use('/classes/patients', patientRouter);
  require('../patients/patientRoutes')(patientRouter)

}
