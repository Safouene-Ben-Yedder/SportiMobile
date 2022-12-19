module.exports = (app) => {
  const student = require("../controllers/students");
  var router = require("express").Router();

  router.get("/:id", student.findStudentById);

  app.use("/api/student", router);
};
