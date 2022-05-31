const scheduleRoutes = require("express").Router();

const {
  authFaculty,
  authAdmin,
} = require("../middleware/faculty_authMiddleware");
const {
  getAllSchedule,
  getOneSchedule,
  addSchedule,
  distinctSchedule,
  filterSchedule,
  filterDate,
} = require("../controller/scheduleController");

scheduleRoutes.get("/my", authFaculty, getOneSchedule);
scheduleRoutes.get("/distinct", distinctSchedule);
scheduleRoutes.get("/date/:id", filterDate);
scheduleRoutes.get("/filter/:id", filterSchedule);
scheduleRoutes.get("/", getAllSchedule);
scheduleRoutes.post("/", authAdmin, addSchedule);

module.exports = scheduleRoutes;
