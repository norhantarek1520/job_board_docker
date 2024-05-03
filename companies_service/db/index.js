const mongoose = require("mongoose");
companies_db
mongoose
  .connect("mongodb://companies_db:27017/companiesdb", { useNewUrlParser: true })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
