import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

import { FlexBetween } from ".";

// Stat Box
const StatBox = ({ title, value, increase, icon, description }) => {
  // theme
  const theme = useTheme();
  return (
    <Box
