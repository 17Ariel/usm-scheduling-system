const jwt = require("jsonwebtoken");
const asynchandler = require("express-async-handler");
const Faculty = require("../models/facultyModel");
const Admin = require("../models/adminModel");

const authFaculty = asynchandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      req.faculty = await Faculty.findById(decode.id).select("-password");

      next();
    } catch (err) {
      res.status(401);
      throw new Error("Wrong Authorized");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not Authorized, Token doesn't exist");
  }
});

const authAdmin = asynchandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      req.admin = await Admin.findById(decode.id).select("-password");

      next();
    } catch (err) {
      res.status(401);
      throw new Error("Wrong Authorized");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not Authorized, Token doesn't exist");
  }
});

module.exports = {
  authFaculty,
  authAdmin,
};
