import Volunteer from "../models/volunteer.model.js";
import errorHandler from "../utils/error.js";

export const addVolunteer = async (req, res, next) => {
  const { name, volunteerId, email, phone, ngoname } = req.body;

  if (!name || !volunteerId || !email || !phone || !ngoname) {
    return next(errorHandler(400, "All fields are required"));
  }

  try {
    const newVolunteer = new Volunteer({
      name,
      volunteerId,
      email,
      phone,
      ngoname,
    });

    await newVolunteer.save();
    res.status(201).json({ message: "Volunteer added successfully", volunteer: newVolunteer });
  } catch (error) {
    next(error);
  }
};
