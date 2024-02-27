import React from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { useGetAdminsQuery } from "state/api";
import { Header, CustomColumnMenu } from "components";

const Admin = () => {
  // theme
  const theme = useTheme();
  // get data
  const { data, isLoading } = useGetAdminsQuery();

  // data columns
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
