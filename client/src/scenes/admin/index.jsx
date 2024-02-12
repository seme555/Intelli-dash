import React from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { useGetAdminsQuery } from "state/api";
import { Header, CustomColumnMenu } from "components";

const Admin = () => {
  // theme
