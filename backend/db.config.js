const mongooose = require("mongoose");

const db = async () => {
  try {
    const conn = await mongooose.connect(process.env.MONGO_DEV);
    console.log(conn.connection.host);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
module.exports = db;
