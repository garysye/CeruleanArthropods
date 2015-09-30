var db = require('../db/index.js');
var formidable = require('formidable');
var conditions = require('../conditions/conditionsController.js');


module.exports = {

  getPhotoUrlById:function(id, cb) {

    var query = "SELECT * FROM tbl_patient_photos WHERE id = ?";

    db.query(query, id, function (err, data) {
      if(!err) {
        cb(data);
      }else {
        console.log('error selected photo');
      }

    });

  },

  addNewPatientPhoto:function(url, cb) {
    var query = "INSERT INTO tbl_patient_photos (photo_url) VALUES( ? )";

    db.query(query, url ,function (err, data) {
      if(!err) {
        cb && cb(data);
      }
      else {
        console.log('error adding patient photo');
      }
    });
  },

  addNewPatient:function(req, res) {
    // instantiate new multi-part form parser
    var form = new formidable.IncomingForm();
    // set directory for files to be uploaded
    form.uploadDir = __dirname + "/../../client/uploads/";
    form.keepExtensions = true;

    // reference to private insert method
    var _insert = module.exports._insertNewPatient;

    form.parse(req, function ( err, fields, files) {

      try {
        // absolute file path that that photo was saved
        var absolutePath = files['photo'].path;
        // construct relative file path to save to db
        var relPath = 'uploads/' + absolutePath.slice(absolutePath.lastIndexOf('/') + 1);
        
      } catch(e) {
        var relPath = 'photos/no-photo.png';
      }


      // condition name that user submits
      var conditionName = fields.condition;

      // if the condition doesn't exist in tbl_conditions
      // adds a new records and return the id
      
      conditions.getOrAddNewCondition(conditionName, function (recordId){
        // fields required for new patient record
        var newPatientFields = [fields.first_name, fields.last_name,fields.email,
          fields.password, recordId, relPath,
          fields.bio,fields.goal
        ];

        // private method to insert new patient
        // invoked after condition id is retrieved
        _insert(res, newPatientFields);
      });
    });


  },

  _insertNewPatient:function(res, vals) {
    // insert statment for tbl_patients
    var sqlquery = "INSERT INTO tbl_patients (first_name, last_name, email, \
      password, condition_id, photo_url, bio, goal) \
      VALUES ( ?,  ?,  ?,  ?,  ?,  ?,  ?,  ?)";

    db.query(sqlquery, vals, function(err, data){
      if(!err) {
        res.status(201).send(data);
      } else {
        if(err.code === 'ER_DUP_ENTRY') {
          // username needs to be unique
          res.status(301).send('<h1>Name Already Exists</h1>');
        } else {
          // mysql error
          res.status(500).send('<h1>error adding patient</h1>' + err);
        }
      }
    });
    

  },

  getPatients: function(req, res) {
    var query = "SELECT * FROM tbl_patients";
    db.query(query, function(err, data){
      if(!err) {
        res.status(200).send(JSON.stringify(data));
      } else {
        res.status(404).send('<h1>error</h1>');
      }
    });
  },

  getPatientById: function(req, res, cb) {
    var query = "SELECT * FROM tbl_patients WHERE id = ? ";
    db.query(query,req.id, function(err, data){
      if(!err) {
        cb && cb(data);
        res.status(200).send(JSON.stringify(data));
      } else {
        res.status(404).send('<h1>error</h1>');
      }
    });
  }



};
