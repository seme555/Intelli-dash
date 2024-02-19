import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { Navbar, Sidebar } from "components";
import { useGetUserQuery } from "state/api";

// Layout
const Layout = () => {
