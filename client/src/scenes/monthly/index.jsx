import React, { useMemo } from "react";
import { Box, CircularProgress, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";

import { useGetSalesQuery } from "state/api";
import { Header } from "components";

import "react-datepicker/dist/react-datepicker.css";

// Monthly
const Monthly = () => {
  // get data
  const { data } = useGetSalesQuery();
  // theme
  const theme = useTheme();

  // formatted data
  const [formattedData] = useMemo(() => {
    if (!data) return [];

    // monthly data
    const { monthlyData } = data;

    // total sales line
    const totalSalesLine = {
      id: "totalSales",
      color: theme.palette.secondary.main,
      data: [],
    };

    // total units line
    const totalUnitsLine = {
      id: "totalUnits",
      color: theme.palette.secondary[600],
      data: [],
    };

    // factor monthly data
    Object.values(monthlyData).forEach(({ month, totalSales, totalUnits }) => {
      totalSalesLine.data = [
        ...totalSalesLine.data,
        {
          x: month,
          y: totalSales,
