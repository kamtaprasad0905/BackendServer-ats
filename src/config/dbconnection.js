const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const URL = process?.env?.DATABASE;
const connection = async () => {
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting database", error);
  }
};

module.exports = connection;
