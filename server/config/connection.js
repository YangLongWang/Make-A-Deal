const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/TradeWay",
  (err) => {
    if (err) throw err;
    console.log("connected to MongoDB");
  }
);

mongoose.set("debug", true);

module.exports = mongoose.connection;
