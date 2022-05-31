const asynchandler = require("express-async-handler");
const Admin = require("../models/adminModel");
const { createToken } = require("./facultyController");
const bcrypt = require("bcrypt");

const adminlogin = asynchandler(async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(500);
    throw new Error("Please Complete!");
  }
  const admin = await Admin.findOne({ username });

  if (admin && (await bcrypt.compare(password, admin.password))) {
    res.status(200).json({ token: createToken(admin.id) });
  } else {
    res.status(400);
    throw new Error("Wrong Credentials!");
  }
});

const adminsignup = asynchandler(async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(500);
    throw new Error("Please Complete!");
  }

  const adminexist = await Admin.findOne({ username });
  if (adminexist) {
    res.status(400);
    throw new Error("Already Exist!");
  }

  const salt = await bcrypt.genSalt(15);
  const hashedpassword = await bcrypt.hash(password, salt);
  const admin = await Admin.create({
    username,
    password: hashedpassword,
  });

  res.status(200).json(admin);
});

const getSchedule = asynchandler(async (req, res) => {
  const schedule = await Admin.find();

  res.status(200).json(schedule);
});

module.exports = {
  adminlogin,
  adminsignup,
  getSchedule,
};
