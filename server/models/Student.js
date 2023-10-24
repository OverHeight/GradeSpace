const { DataTypes } = require("sequelize");
const db = require("../database");
const Grade = require("./Grade");
const Class = require("./Class");

const Student = db.define("Student", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  image: {
    type: DataTypes.STRING,
  },
  url: {
    type: DataTypes.STRING,
  },
  nomor_induk: {
    type: DataTypes.INTEGER(20),
    unique: true,
    allowNull: false,
  },
  kelas_id: DataTypes.INTEGER,
  nama: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  alamat: {
    type: DataTypes.TEXT,
  },
  tanggal_lahir: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

Student.hasOne(Class, { foreignKey: "student_id" });
Student.hasMany(Grade, { foreignKey: "student_id" });

module.exports = Student;
