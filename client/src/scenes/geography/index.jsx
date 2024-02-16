import React from "react";
import { Box, useTheme, CircularProgress } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";

import { useGetGeographyQuery } from "state/api";
import { geoData } from "state/geoData";
import { Header } from "components";

