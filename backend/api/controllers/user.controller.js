import User from "../models/user.model.js";
import NGO from "../models/ngo.model.js";
import bcryptjs from "bcryptjs";
import errorHandler from "../utils/error.js";
import jwt from "jsonwebtoken";

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "your_jwt_secret_key";

export const signin = async (req, res, next) => {
  const { role, email, password } = req.body;

  if (!email || !password) {
    return next(errorHandler(400, "All fields are required"));
  }

  try {
    let validUser;
    if (role === "ngoPartner") {
      validUser = await NGO.findOne({ email });
    } else {
      validUser = await User.findOne({ email });
    }

    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, "Invalid Password"));
    }

    const token = jwt.sign(
      { id: validUser._id, role: role },
      JWT_SECRET_KEY,
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

export const signup = async (req, res, next) => {
  const { username, email, password, role, profilePicture, bio, socialLinks } = req.body;

  if (!username || !email || !password || !role) {
    return next(errorHandler(400, "All fields are required"));
  }

  try {
    const hashedPassword = bcryptjs.hashSync(password, 10);

    let newUser;
    if (role === "ngoPartner") {
      newUser = new NGO({
        username,
        email,
        password: hashedPassword,
        profilePicture,
        bio,
        socialLinks,
      });
    } else {
      newUser = new User({
        username,
        email,
        password: hashedPassword,
        role,
        profilePicture,
        bio,
        socialLinks,
      });
    }

    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};
