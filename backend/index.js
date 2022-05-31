const express = require("express");
const port = process.env.PORT || 8000;
const dotenv = require("dotenv");
const cors = require("cors");
const { errorHandler } = require("./middleware/errorMiddleware");
const path = require("path");
const app = express();
const db = require("./db.config");

dotenv.config({ path: "./.env" });
db();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/admin", require("./routes/adminRoutes"));
app.use("/faculty", require("./routes/facultyRoutes"));
app.use("/schedule", require("./routes/scheduleRoutes"));

app.use(errorHandler);
app.use(express.static(path.resolve(__dirname, "../frontend/build")));

app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"));
});
app.listen(port, () => console.log(`You are running port ${port}`));
