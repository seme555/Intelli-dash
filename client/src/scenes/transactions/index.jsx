import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, useTheme } from "@mui/material";

import { useGetTransactionsQuery } from "state/api";
import { Header, DataGridCustomToolbar } from "components";

// Transactions
const Transactions = () => {
  // theme
  const theme = useTheme();
