import React, { useMemo } from "react";
import { ResponsiveLine } from "@nivo/line";
import { useTheme, CircularProgress, Box } from "@mui/material";

import { useGetSalesQuery } from "state/api";

// Overview Chart
const OverviewChart = ({ isDashboard = false, view }) => {
  // theme
  const theme = useTheme();
  const { data, isLoading } = useGetSalesQuery();

  // get chart data
  const [totalSalesLine, totalUnitsLine] = useMemo(() => {
    if (!data) return [];

    // monthly data
    const { monthlyData } = data;

    // total sales line data
    const totalSalesLine = {
      id: "totalSales",
