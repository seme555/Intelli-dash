import React, { useState, useEffect } from "react";
import {
  DownloadOutlined,
  Email,
  PointOfSale,
  PersonAdd,
  Traffic,
  Close,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  Alert,
  IconButton,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { useGetDashboardQuery } from "state/api";
import {
  FlexBetween,
  Header,
  BreakdownChart,
  OverviewChart,
  StatBox,
} from "components";

const Dashboard = () => {
  // theme
  const theme = useTheme();
  // is large desktop screen
  const isNonMediumScreen = useMediaQuery("(min-width: 1200px)");
  // get data
  const { data, isLoading } = useGetDashboardQuery();
  // banner state
  const [showBanner, setShowBanner] = useState(false);

  // check local storage on mount
  useEffect(() => {
    const bannerDismissed = localStorage.getItem("bannerDismissed");
    if (!bannerDismissed) {
      setShowBanner(true);
    }
  }, []);

  // handle banner close
  const handleBannerClose = () => {
    setShowBanner(false);
    localStorage.setItem("bannerDismissed", "true");
  };

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
