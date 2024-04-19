import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { Box, CircularProgress, Typography, useTheme } from "@mui/material";

import { useGetSalesQuery } from "state/api";

// Breakdown Chart
const BreakdownChart = ({ isDashboard = false }) => {
  const { data, isLoading } = useGetSalesQuery();
  const theme = useTheme();

  // Loader
  if (!data || isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <CircularProgress size={20} aria-label="Loading..." color="secondary" />
      </Box>
    );
  }

  // theme colors
  const colors = [
    theme.palette.secondary[500],
    theme.palette.secondary[300],
    theme.palette.secondary[300],
    theme.palette.secondary[500],
  ];

  // formatted data
  const formattedData = Object.entries(data.salesByCategory).map(
    ([category, sales], i) => ({
      id: category,
      label: category,
