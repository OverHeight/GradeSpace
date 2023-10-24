const path = require("path");
const Student = require("../models/Student");
const fs = require("fs");

const getStudents = async (req, res) => {
  try {
    const response = await Student.findAll();
    return res.status(200).send(response);
  } catch (error) {
    console.error(error);
  }
};

const getStudentById = async (req, res) => {
  try {
    const response = await Student.findById({
      where: { id: req.params.id },
    });
    return res.status(200).json(response);
  } catch (error) {}
};

const createStudent = (req, res) => {
  try {
    const { ...payload } = req.body;
    const file = req.files;
    console.log(payload);

    const ext = path.extname(file.name).toLowerCase();
    const allowedTypes = [".png", ".jpg", ".jpeg"];

    if (!allowedTypes.includes(ext)) {
      return res.status(422).json({ message: "Invalid Image Type" });
    }

    const fileSize = file.data.length;
    if (fileSize > 5000000) {
      return res.status(422).json({ message: "Image must be less than 5 MB" });
    }

    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

    file.mv(`./public/images/${fileName}`, async (err) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }

      try {
        await Product.create({ ...payload, image: fileName, url });
        res.status(201).json({ message: "Student Created Successfully" });
      } catch (error) {
        console.log(error.message);
      }
    });
  } catch (error) {
    return res.status(500).json({ InternalServerError: error.message });
  }
};

module.exports = {
  getStudents,
  getStudentById,
  createStudent,
};
