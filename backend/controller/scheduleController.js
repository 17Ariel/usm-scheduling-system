const asynchandler = require("express-async-handler");
const Schedule = require("../models/scheduleModel");

const getOneSchedule = asynchandler(async (req, res) => {
  const schedule = await Schedule.find({ email: req.faculty.email });

  res.status(200).json(schedule);
});

const filterSchedule = asynchandler(async (req, res) => {
  const schedule = await Schedule.find({ day: req.params.id });

  res.status(200).json(schedule);
});

const filterDate = asynchandler(async (req, res) => {
  const schedule = await Schedule.find({ day: req.params.id }).distinct("date");

  res.status(200).json(schedule);
});

const getAllSchedule = asynchandler(async (req, res) => {
  const schedule = await Schedule.find();

  res.status(200).json(schedule);
});

const distinctSchedule = asynchandler(async (req, res) => {
  const schedule = await Schedule.distinct("day");

  res.status(200).json(schedule);
});

const addSchedule = asynchandler(async (req, res) => {
  const { time, proctor, location, day, email, date } = req.body;

  if (!time || !proctor || !location || !email || !date || !day) {
    res.status(400);
    throw new Error("Please Complete!");
  }
  const exist = await Schedule.findOne({ time, location, date });
  if (exist) {
    res.status(400);
    throw new Error("Already schedule!");
  }

  const schedule = await Schedule.create({
    time,
    proctor,
    location,
    day,
    date,
    email,
    userid: req.admin.id,
  });
  res.status(200).json(schedule);
});

module.exports = {
  getAllSchedule,
  getOneSchedule,
  addSchedule,
  distinctSchedule,
  filterSchedule,
  filterDate,
};
