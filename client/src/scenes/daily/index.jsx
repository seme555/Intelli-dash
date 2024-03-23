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
