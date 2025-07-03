require("dotenv").config();
const { Sequelize } = require("sequelize");
const pg = require("pg");

require("dotenv").config(); 

// Feel free to rename the database to whatever you want!
const dbName = "ttp_crud";

const db = new Sequelize(process.env.DATABASE_URL || `postgres://localhost:5432/${dbName}`,
  {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: false,
  }
);

module.exports = db;
