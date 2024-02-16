import React, { useMemo } from "react";
import { ResponsiveLine } from "@nivo/line";
import { useTheme, CircularProgress, Box } from "@mui/material";

import { useGetSalesQuery } from "state/api";
