import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
  CircularProgress,
} from "@mui/material";

import { useGetProductsQuery } from "state/api";
import { Header } from "components";

// Product
const Product = ({
  _id,
  name,
  description,
  price,
  rating,
  category,
  supply,
  stat,
}) => {
  // theme
  const theme = useTheme();
  // is expanded
  const [isExpanded, setIsExpanded] = useState(false);

  return (
