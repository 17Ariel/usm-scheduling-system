const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asynchandler = require("express-async-handler");
const Faculty = require("../models/facultyModel");

const getFaculty = asynchandler(async (req, res) => {
  const faculty = await Faculty.find();

  res.status(200).json(faculty);
});

const getOneFaculty = asynchandler(async (req, res) => {
  const faculties = await Faculty.findById(req.faculty.id);

  res.status(200).json(faculties);
});

const signupFaculty = asynchandler(async (req, res) => {
  const { firstname, lastname, position, email, password, college, campus } =
    req.body;

  if (
    !firstname ||
    !lastname ||
    !position ||
    !email ||
    !password ||
    !college ||
    !campus
  ) {
    res.status(400);
    throw new Error("Please Complete");
  }
  const facultyEmailexist = await Faculty.findOne({ email });

  if (facultyEmailexist) {
    res.status(400);
    throw new Error("Already exist");
  }

  const salt = await bcrypt.genSalt(15);
  const hashedpassword = await bcrypt.hash(password, salt);

  const faculty = await Faculty.create({
    firstname,
    lastname,
    position,
    email,
    password: hashedpassword,
    college,
    campus,
  });

  res.status(200).json(faculty);
});

const loginFaculty = asynchandler(async (req, res) => {
  const { email, password } = req.body;

  const faculty = await Faculty.findOne({ email });

  if (!email || !password) {
    res.status(400);
    throw new Error("Please Complete!");
  }

  if (faculty && (await bcrypt.compare(password, faculty.password))) {
    res.status(200).json({ token: createToken(faculty.id) });
  } else {
    res.status(400);
    throw new Error("Wrong Credentials");
  }
});

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

module.exports = {
  getFaculty,
  getOneFaculty,
  signupFaculty,
  loginFaculty,
  createToken,
};
