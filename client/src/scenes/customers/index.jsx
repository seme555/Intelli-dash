import React from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { useGetCustomersQuery } from "state/api";
import { Header } from "components";

// Customers
const Customers = () => {
  // theme
  const theme = useTheme();
