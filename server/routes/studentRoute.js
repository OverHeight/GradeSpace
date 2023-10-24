const express = require("express");
const {
  getStudents,
  getStudentById,
  createStudent,
} = require("../controllers/studentContoller");

const router = express.Router();

router.get("/students", getStudents);
router.get("/students/:id", getStudentById);
router.post("/students", createStudent);

module.exports = router;
