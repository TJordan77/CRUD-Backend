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
        defaultValue: "https://enter.your.url/here.jpg",
    },
    }
);