import { configureStore } from "@reduxjs/toolkit";
import incomeSlice from "./slices/incomeSlice";

const reduxStore = configureStore({
  reducer: {
    incomes: incomeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof reduxStore.getState>;

export default reduxStore;
