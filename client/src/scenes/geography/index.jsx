import React from "react";
import { Box, useTheme, CircularProgress } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";

import { useGetGeographyQuery } from "state/api";
import { geoData } from "state/geoData";
import { Header } from "components";

// Geography
const Geography = () => {
  // theme
  const theme = useTheme();
  // get data
  const { data } = useGetGeographyQuery();

  return (
    <Box m="1.5rem 2.5rem">
      {/* Header */}
      <Header title="GEOGRAPHY" subtitle="Find where your users are located." />

      {/* Content */}
      <Box
        mt="40px"
        height="75vh"
        border={`1px solid ${theme.palette.secondary[200]}`}
        borderRadius="4px"
      >
        {/* choropleth map */}
        {data ? (
          <ResponsiveChoropleth
            data={data}
            theme={{
              axis: {
                domain: {
                  line: {
                    stroke: theme.palette.secondary[200],
                  },
