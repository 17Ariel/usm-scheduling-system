const facultyRoutes = require("express").Router();
const { authFaculty } = require("../middleware/faculty_authMiddleware");
const {
  getFaculty,
  signupFaculty,
  loginFaculty,
  getOneFaculty,
} = require("../controller/facultyController");

facultyRoutes.get("/", getFaculty);
facultyRoutes.get("/me", authFaculty, getOneFaculty);
facultyRoutes.post("/signup", signupFaculty);
facultyRoutes.post("/login", loginFaculty);

module.exports = facultyRoutes;
