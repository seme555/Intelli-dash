import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, useTheme } from "@mui/material";

import { useGetTransactionsQuery } from "state/api";
import { Header, DataGridCustomToolbar } from "components";

// Transactions
const Transactions = () => {
  // theme
  const theme = useTheme();

  // values for backend
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");

  // search
  const [searchInput, setSearchInput] = useState("");
  // get data
  const { data, isLoading } = useGetTransactionsQuery({
    page,
    pageSize,
    sort: JSON.stringify(sort),
    search,
  });

  // data columns
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "userId",
      headerName: "User ID",
      flex: 0.5,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      flex: 1,
