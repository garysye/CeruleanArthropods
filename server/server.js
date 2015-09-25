var express = require('express');
var morgan = require('morgan');

//Creates and initializes an express application
var app = express();
var port = process.env.PORT || 3000;
app.listen(port);

//Serve up static files in client folder and other middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));
