const { DataTypes, Model } = require("sequelize");
const db = require("./db");

const Student = db.define("student", {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
            notEmpty: true,
        },
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "https://placehold.co/200x200",
    },
    gpa: {
        type: DataTypes.FLOAT,
        validate: {
            min: 0.0,
            max: 4.0,
        },
    },
});
module.exports = Student;