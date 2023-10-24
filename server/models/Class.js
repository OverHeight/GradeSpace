const { DataTypes } = require("sequelize");
const db = require("../database");

const Class = db.define("Class", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nama: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tingkatan: {
    type: DataTypes.ENUM(["10", "11", "12"]),
  },
});

module.exports = Class;
