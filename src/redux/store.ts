import { configureStore } from "@reduxjs/toolkit";
import expenseSlice from "./slices/expenseSlice";
import incomeSlice from "./slices/incomeSlice";

const reduxStore = configureStore({
  reducer: {
    incomes: incomeSlice.reducer,
    expenses: expenseSlice.reducer,
  },
});

export type RootState = ReturnType<typeof reduxStore.getState>;

export default reduxStore;
