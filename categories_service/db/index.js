const mongoose = require("mongoose");

mongoose
  .connect("mongodb://categories_db:27017/categorydb", { useNewUrlParser: true })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
