import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialSlice = createSlice({
  name: "initial",
  initialState: {},
  reducers: {},
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.profile,
      };
    },
  },
});

export const initialActions = initialSlice.actions;

export default initialSlice.reducer;
