const { json } = require("sequelize");
const { User, validateLogin, validateRegister } = require("../models/User");
const bcrypt = require("bcrypt");

const getUsers = async (req, res) => {
  try {
    const response = await User.findAll();
    return res.status(200).json(response);
  } catch (error) {
    console.error({ msg: error });
  }
};

const getUserById = async (req, res) => {
  try {
    const response = await User.findOne({ where: { id: req.params.id } });
    return res.status(200).json(response);
  } catch (error) {
    console.error({ msg: error });
  }
};

const registerUser = async (req, res) => {
  try {
    const payload = { ...req.body };
    console.log("ini payload" + { payload });
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    console.log(user);
    if (user) {
      return res.status(409).send({ msg: "Email is already being used" });
    }
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const response = await new User({
      username: req.body.username,
      email: req.body.email,
      password: hashPassword,
    }).save();

    return res
      .status(201)
      .json(response, { msg: "success Creating User: " + response });
  } catch (error) {
    return res.status(500).send({ msg: "Internal Server Error " + error });
  }
};

const loginUser = async (req, res) => {
  try {
    const { error } = validateLogin(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });
    const user = await User.findOne({ where: { username: req.body.username } });
    if (!user) {
      return res.status(409).send({ msg: "Incorrect Username or Password" });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      return res.status(403).send({ msg: "Invalid Username or Password" });
    }
    return res.status(202).send({ msg: "login successful" });
  } catch (error) {
    return res.status(500).json({ msg: "Internal Server Error" + error });
  }
};

module.exports = { getUsers, getUserById, registerUser, loginUser };
