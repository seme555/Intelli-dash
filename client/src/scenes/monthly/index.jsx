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
