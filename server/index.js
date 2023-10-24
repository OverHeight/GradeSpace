const express = require("express");
const User = require("./models/User");
const db = require("./database");
const Subject = require("./models/Subject");
const Student = require("./models/Student");
const Grade = require("./models/Grade");
const Class = require("./models/Class");
const userRoutes = require("./routes/userRoute");
const studentRoutes = require("./routes/studentRoute");
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
  optionSuccessStatus: 200,
};

// Middleware
app.use(express.json());
app.use(cors(corsOptions));

// Routes
app.use(userRoutes);
app.use(studentRoutes);

const port = 8080;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// Model Sync
(async () => {
  try {
    await db.authenticate();
    console.log("Authenticated");

    await db.sync(User);
    await db.sync(Subject);
    await db.sync(Student);
    await db.sync(Grade);
    await db.sync(Class);
    console.log("Model sync success");
  } catch (error) {
    console.error(error);
  }
})();
