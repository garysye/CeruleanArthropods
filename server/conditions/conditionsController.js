var db = require('../db/index.js');

module.exports = {

  getConditionById: function(req, res) {
    var query = "SELECT * FROM tbl_conditions WHERE id = ?";
    db.query(query, req.id, function(err, data) {
      res.send(data);
    });
  },

  checkIfConditionExists: function (name, cb) {
    var query = "SELECT * FROM tbl_conditions WHERE condition_name = ?";
    db.query(query, name, function (err, data) {
      if (!err) {
        cb(data);
      }
    });
  },

  getOrAddNewCondition:function(name, cb) {
    this.checkIfConditionExists(name, function (data) {
      if(data.length === 0) {
        this.addNewPatient(name, cb);
      } else {
        cb(data[0].id);
      }
    }.bind(this));
  },

  addNewPatient:function(name, cb) {
    var query = "INSERT INTO tbl_conditions (condition_name) VALUES (?)";
    db.query(query, name, function (err, data) {
      if (!err) {
        cb(data.insertId);
      } else {
        console.log('error adding condition to table');
      }
    });
  }
};
