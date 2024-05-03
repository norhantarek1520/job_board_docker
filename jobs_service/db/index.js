const mongoose = require("mongoose");

mongoose
  .connect("mongodb://jobs_db:27017/jobsdb", { useNewUrlParser: true })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
