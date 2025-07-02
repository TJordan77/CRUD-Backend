const db = require("./db");
const Duck = require("./duck");
const Campus = require("./campus");
const Student = require("./student");

Campus.hasMany(Student);
Student.belongsTo(Campus);

module.exports = {
  db,
  Duck,
  Campus,
  Student,
};
