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
      color: theme.palette.secondary.main,
      data: [],
    };

    // total units line data
    const totalUnitsLine = {
      id: "totalUnits",
      color: theme.palette.secondary[600],
      data: [],
    };

    // factor monthly data
    Object.values(monthlyData).reduce(
      (acc, { month, totalSales, totalUnits }) => {
        const currentSales = acc.sales + totalSales;
        const currentUnits = acc.units + totalUnits;

        totalSalesLine.data = [
          ...totalSalesLine.data,
          {
            x: month,
            y: currentSales,
          },
        ];

        totalUnitsLine.data = [
          ...totalUnitsLine.data,
          {
            x: month,
            y: currentUnits,
          },
        ];

        return { sales: currentSales, units: currentUnits };
      },
      { sales: 0, units: 0 }
