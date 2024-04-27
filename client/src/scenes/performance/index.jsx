import React from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";

import { useGetUserPerformanceQuery } from "state/api";
import { Header, CustomColumnMenu } from "components";

// Performance
const Performance = () => {
  // theme
  const theme = useTheme();
  // Get user id from redux state
  const userId = useSelector((state) => state.global.userId);
  // get data
  const { data, isLoading } = useGetUserPerformanceQuery(userId);

  // data columns
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "userId",
