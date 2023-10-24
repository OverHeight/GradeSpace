const { DataTypes } = require("sequelize");
const db = require("../database");
const Grade = require("./Grade");

const Subject = db.define("subject", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nama: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  bobot: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  kelas: {
    type: DataTypes.ENUM(["10", "11", "12"]),
  },
});

Subject.hasMany(Grade, { foreignKey: "subject_id" });

module.exports = Subject;
