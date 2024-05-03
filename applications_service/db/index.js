const mongoose = require("mongoose");

mongoose
  .connect("mongodb://applications_db:27017/applicationsdb", { useNewUrlParser: true })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
