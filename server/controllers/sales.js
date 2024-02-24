// Model import
import OverallStat from "../models/OverallStat.js";

// Get Sales
export const getSales = async (_, res) => {
  try {
    const overallStats = await OverallStat.find();

