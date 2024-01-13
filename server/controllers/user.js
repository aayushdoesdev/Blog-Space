import { users } from "../models/users.model.js";
import bcrypt from "bcrypt";

// UPDATE
export const updateUser = async (req, res) => {
  try {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hashSync(req.body.password, salt);
    }

    const updatedUser = await users.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};


// DELETE
export const deleteUser = async (req, res) => {
  try {
    await users.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User has been deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
};


// GET USER
export const getUser = async (req, res) => {
  try {
    const user = await users.findById(req.params.id);
    if (!user) {
     return res.json({ message: "User does not Exist!" }); // be sure to add return to break the code then and there else the code will still rn even if the statement is false
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};
