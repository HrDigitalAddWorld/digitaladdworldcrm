// src/config/database.js
const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI); // latest Mongoose v7+ me options nahi chahiye
    // console.log(`MongoDB Connected: ${conn.connection.host}`);
    console.log(`MongoDB Connected Successfully`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Optional: connection error logging
mongoose.connection.on("error", err => {
  console.error(`MongoDB connection error: ${err}`);
});

module.exports = connectDB;
