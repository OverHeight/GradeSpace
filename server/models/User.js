const { DataTypes } = require("sequelize");
const db = require("../database");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const User = db.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

const validateRegister = (data) => {
  const schema = Joi.object({
    username: Joi.string().required().label("Username"),
    email: Joi.string().email().required().label("email"),
    password: passwordComplexity().required().label("password"),
  });
  return schema.validate(data);
};

const validateLogin = (data) => {
  const schema = Joi.object({
    username: Joi.string().required().label("username"),
    password: Joi.string().required().label("password"),
  });
  return schema.validate(data);
};

module.exports = { User, validateRegister, validateLogin };
