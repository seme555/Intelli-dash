import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { Box, CircularProgress, Typography, useTheme } from "@mui/material";

import { useGetSalesQuery } from "state/api";

// Breakdown Chart
const BreakdownChart = ({ isDashboard = false }) => {
  const { data, isLoading } = useGetSalesQuery();
