const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://murali:Gupta5862@learnnodemongodb.rxncxke.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
