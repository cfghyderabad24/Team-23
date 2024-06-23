import User from "../models/user.model.js";
import Student from "../models/student.model.js";
import Volunteer from "../models/volunteer.model.js";
import NGO from "../models/ngo.model.js";
import bcryptjs from "bcryptjs";
import errorHandler from "../utils/error.js";
import jwt from "jsonwebtoken";
// import { env } from "process";


export const signin = async (req, res, next) => {
  const { role, email, password } = req.body;

  if (!email || !password) {
    return next(errorHandler(400, "All Fields are required"));
  }

  try {
    let validUser;

    if (role === "ngos") {
      validUser = await NGO.findOne({ email });
    } else if (role == "student") {
      validUser = await Student.findOne({ email });
    } else if (role === "Volunteer") {
      validUser = await Volunteer.findOne({ email });
    } else {
      validUser = await User.findOne({ email });
    }

    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }

    const validPassword = password === validUser.password;
    if (!validPassword) {
      return next(errorHandler(400, "Invalid Password"));
    }

    const token = jwt.sign(
      { id: validUser._id, isAdmin: validUser.isAdmin },
      "auu",
      { expiresIn: "1h" }
    );

    const { password: pass, ...rest } = validUser._doc;
    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};
