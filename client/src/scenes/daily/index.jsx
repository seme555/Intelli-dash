import React, { useMemo, useState } from "react";
import { Box, CircularProgress, useTheme } from "@mui/material";
import DatePicker from "react-datepicker";
import { ResponsiveLine } from "@nivo/line";

import { useGetSalesQuery } from "state/api";
import { Header } from "components";

import "react-datepicker/dist/react-datepicker.css";

// Daily
const Daily = () => {
  // keep track of start & end date
  const [startDate, setStartDate] = useState(new Date("2021-02-01"));
  const [endDate, setEndDate] = useState(new Date("2021-03-01"));

  // get data
  const { data } = useGetSalesQuery();
  const theme = useTheme();

  // format data
  const [formattedData] = useMemo(() => {
    if (!data) return [];

    // daily data
    const { dailyData } = data;

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

    // factor daily data
    Object.values(dailyData).forEach(({ date, totalSales, totalUnits }) => {
      // formatted date
      const dateFormatted = new Date(date);
