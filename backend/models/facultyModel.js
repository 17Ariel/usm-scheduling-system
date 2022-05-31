const mongoose = require("mongoose");

const facultySchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    college: {
      type: String,
      required: true,
    },
    campus: {
      type: String,
      required: true,
    },
  },
  {
    collections: "faculty",
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Faculty", facultySchema);
