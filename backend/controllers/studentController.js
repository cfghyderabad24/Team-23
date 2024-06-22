const student = require("../models/student");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const express = require("express");
const saltRounds = 10;
const Unique = require("../models/unique");

// @desc Get all users
// @route GET /users
// @access Private
const getAllStudents = asyncHandler(async (req, res) => {
  console.log(req.body);
  // Get all users from MongoDB
  const users = await student.find().select("-name").lean();

  // If no users
  if (!users?.length) {
    return res.status(400).json({ message: "No users found" });
  }

  res.json(users);
});

// @desc Create new user
// @route POST /users
// @access Private
const createStudent = asyncHandler(async (req, res) => {
  const {
    name,
    gender,
    twelthPercentage,
    college,
    stream,
    scholarshipYear,
    scholarshipAmount,
    graduationYear,
    currentOccupation,
    ngoRegion,
    address,
  } = req.body;

  // Check if required fields are provided
  if (
    !name ||
    !gender ||
    !twelthPercentage ||
    !college ||
    !stream ||
    !scholarshipYear ||
    !scholarshipAmount ||
    !graduationYear ||
    !ngoRegion
  ) {
    res.status(400);
    throw new Error("Please provide all required fields");
  }

  const Student = new student({
    name,
    gender,
    twelthPercentage,
    college,
    stream,
    scholarshipYear,
    scholarshipAmount,
    graduationYear,
    currentOccupation,
    ngoRegion,
    address,
  });

  const createdStudent = await Student.save();
  res.status(201).json(createdStudent);
});

/* const createStudent = asyncHandler(async (req, res) => {
  const { studentId, name, password, attendance } = req.body;

  // Check if required fields are provided
  if (!studentId || !name || !password) {
    res.status(400);
    throw new Error("Please provide all required fields");
  }

  const Student = new Unique({
    studentId,
    name,
    password,
    attendance,
  });

  const createdStudent = await Student.save();
  res.status(201).json(createdStudent);
}); */

// @desc Update a user
// @route PATCH /users
// @access Private
const updateStudent = asyncHandler(async (req, res) => {
  const { name, studentId, stream, twelthPercentage, attendance } = req.body;

  const studentToUpdate = await student.findOneAndUpdate(
    { name: name },
    { $set: { twelthPercentage: twelthPercentage } },
    { new: true }
  );

  // Update attendance using studentId
  const attendanceUpdated = await Unique.findOneAndUpdate(
    { studentId: studentId },
    { $set: { attendance: attendance } },
    { new: true }
  );

  if (!studentToUpdate || !attendanceUpdated) {
    return res
      .status(400)
      .json({ message: "Student not found or update failed" });
  }

  res.json({ message: `${studentToUpdate.name} updated successfully` });
});
// @desc Delete a user
// @route DELETE /users
// @access Private
const deleteStudent = asyncHandler(async (req, res) => {
  const { name } = req.body;

  // Assuming `Note` was meant to be `student` based on context
  const user = await student.findOne({ name: name }).exec();

  // Does the user exist to delete?
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  // Add "rejected" to the status array
  user.status.push("rejected");

  // Save the updated user
  const result = await user.save();

  const reply = `Username ${result.username} with ID ${result._id} deleted and status set to rejected`;

  res.json(reply);
});

module.exports = {
  getAllStudents,
  createStudent,
  deleteStudent,
  updateStudent,
};
