import React, { useMemo } from "react";
import { Box, CircularProgress, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";

import { useGetSalesQuery } from "state/api";
import { Header } from "components";
