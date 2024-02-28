import mongoose from "mongoose";

// Models import
import User from "../models/User.js";
import Transaction from "../models/Transaction.js";

// Get Admins
export const getAdmins = async (_, res) => {
  try {
    const admins = await User.find({ role: "admin" }).select("-password");

    res.status(200).json(admins);
  } catch (error) {
    res.status(200).json({ message: error.message });
  }
};

