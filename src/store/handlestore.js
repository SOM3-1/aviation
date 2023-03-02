import { configureStore } from "@reduxjs/toolkit";
import { slice } from "./store";

export const sliceStore = configureStore({
  reducer: {
    loginStatus: slice.reducer,
  },
});
