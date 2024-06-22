const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Define the schema
const userSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  attendance: {
    type: Number,
    required: true,
  },
});
const User = mongoose.model("Unique", userSchema);

module.exports = User;
