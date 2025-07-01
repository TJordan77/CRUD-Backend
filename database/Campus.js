const { DataTypes, Model } = require('sequelize');
const db = require('./db');

const Campus = db.define('campus', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        imageUrl: {
            type: DataTypes.STRING,
            defaultValue: '???',
        },
    });
    module.exports = Campus;