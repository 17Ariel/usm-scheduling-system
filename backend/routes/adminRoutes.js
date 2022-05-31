const adminRoutes = require("express").Router();

const {
  adminlogin,
  adminsignup,
  getSchedule,
} = require("../controller/adminController");

adminRoutes.post("/signup", adminsignup);
adminRoutes.post("/login", adminlogin);
adminRoutes.get("/", getSchedule);

module.exports = adminRoutes;
