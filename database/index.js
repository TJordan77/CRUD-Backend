const db = require("./db");
const Campus = require('./Campus');
const Student = require('./Student');


Campus.hasMany(Student);
Student.belongsTo(Campus);

module.exports = {
  db,
  Campus,
  Student,
};
