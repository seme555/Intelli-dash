import React, { useState } from "react";
import { FormControl, MenuItem, InputLabel, Box, Select } from "@mui/material";

import { Header, OverviewChart } from "components";

// Overview
const Overview = () => {
  // view - units/sales
  const [view, setView] = useState("units");

  return (
    <Box m="1.5rem 2.5rem">
      {/* Header */}
      <Header
        title="OVERVIEW"
        subtitle="Overview of general revenue and profit"
