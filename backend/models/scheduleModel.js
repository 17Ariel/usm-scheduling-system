const mongoose = require("mongoose");

const scheduleSchema = mongoose.Schema(
  {
    time: {
      type: String,
      required: true,
    },
    proctor: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    day: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    email: {
      type: String,
      required: true,
      ref: "Faculty",
    },
    userid: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    collections: "schedule",
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Schedule", scheduleSchema);
