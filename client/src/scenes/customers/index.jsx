import React from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { useGetCustomersQuery } from "state/api";
import { Header } from "components";

// Customers
const Customers = () => {
  // theme
  const theme = useTheme();
  // get data
  const { data, isLoading } = useGetCustomersQuery();

  // data columns
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 0.5,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 0.5,
      renderCell: (params) => {
        return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1) $2-$3"); // format phone number (123) 456-7890
      },
    },
    {
      field: "country",
