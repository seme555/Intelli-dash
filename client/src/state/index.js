import { createSlice } from "@reduxjs/toolkit";

// initial redux state
const initialState = {
  mode: "dark",
  userId: "63701cc1f03239b7f700000e",
};

// reducers to get redux state data
export const globalSlice = createSlice({
  name: "global",
  initialState,
