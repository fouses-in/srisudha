import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import initialReducer from "./initial";

export const store = configureStore({
  reducer: {
    initial: initialReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
const makeStore = () => store;

export default createWrapper(makeStore);
