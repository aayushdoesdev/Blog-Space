import { users } from "../models/users.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// REGISTER
export const userRegister = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    const user = await users.findOne({ username });
    if (user) {
      res.json({ message: "User already exist!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new users({ username, password: hashedPassword, email });
    await newUser.save();
    res.json(newUser);
  } catch (err) {
    console.error(err);
  }
};

// LOGIN
export const userLogin = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const user = await users.findOne({ username });
    if (!user) {
      res.json({ message: "User does not exist!" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.json({ message: "User or Password is invalid" });
    }

    const token = jwt.sign({ _id: user._id }, process.env.SECRET_TOKEN);
    res.cookie("token", token);
    res.json({ UserID: user._id });
  } catch (err) {
    console.error(err);
  }
};

// LOGOUT
export const userLogout = async (req, res) => {
  try {
    res
      .clearCookie("token", { sameSite: "none", secure: "true" })
       res.json({ message: "User logged out successfully!" });
  } catch (err) {
    console.error(err);
  }
};
