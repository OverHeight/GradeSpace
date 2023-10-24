const express = require("express");

const {
  getUsers,
  getUserById,
  registerUser,
  loginUser,
} = require("../controllers/userController");
const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users/register", registerUser);
router.post("/users/login", loginUser);

module.exports = router;
