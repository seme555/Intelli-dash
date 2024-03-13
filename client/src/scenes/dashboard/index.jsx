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
