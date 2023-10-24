const { DataTypes } = require("sequelize");
const db = require("../database");
const Subject = require("./Subject");

const Grade = db.define("Grade", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  jenis_nilai: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  nilai: DataTypes.FLOAT,
});

module.exports = Grade;
