const { DataTypes, Model } = require("sequelize");
const db = require("./db");

const Campus = db.define("campus", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: DataTypes.STRING,
    defaultValue: "https://placehold.co/600x400",
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: DataTypes.TEXT,
  },
});
module.exports = Campus;
