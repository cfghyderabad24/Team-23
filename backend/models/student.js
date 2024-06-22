const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    twelthPercentage: {
      type: Number,
      required: true,
    },
    college: {
      type: String,
      required: true,
    },
    stream: {
      type: String,
      required: true,
    },
    scholarshipYear: {
      type: Number,
      required: true,
    },
    scholarshipAmount: {
      type: Number,
      required: true,
    },
    graduationYear: {
      type: Number,
      required: true,
    },
    currentOccupation: {
      type: String,
    },
    ngoRegion: {
      type: String,
      required: true,
    },
    address: {
      street: String,
      city: String,
      state: String,
      postalCode: String,
      country: String,
    },
    status: {
      type: [String],
      required: false,
      default: ["active"],
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("student", studentSchema);

module.exports = Student;
