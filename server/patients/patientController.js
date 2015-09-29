var db = require('../db/index.js');


module.exports = {

  addNewPatient:function(req, res) {

    var patientVals = [
      req.body.first_name,
      req.body.last_name,
      req.body.username,
      req.body.password,
      req.body.condition_id,
      req.body.photo_id,
      req.body.bio,
      req.body.bank,
      req.body.goal,
      req.body.funded
    ];
    var b = req.body;

    var sqlquery = "INSERT INTO tbl_patients (first_name, last_name, username, \
      password, condition_id, photo_id, bio, bank, goal, funded) \
      VALUES ( ?,  ?,  ?,  ?,  ?,  ?,  ?,  ?,  ?,  ?)";


    db.query(sqlquery, patientVals, function (err, data){
      if(!err) {
        res.status(201).send(data);
      } else {
        res.status(404).send('<h1>error</h1>');
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

  getPatientByName: function(req, res) {
    var query = "SELECT * FROM tbl_patients WHERE id = ? ";
    db.query(query,req.id, function(err, data){
      if(!err) {
        res.status(200).send(JSON.stringify(data));
      } else {
        res.status(404).send('<h1>error</h1>');
      }
    });
  }



};
