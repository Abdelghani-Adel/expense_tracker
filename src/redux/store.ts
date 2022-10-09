import { configureStore } from "@reduxjs/toolkit";
import expenseSlice from "./slices/expenseSlice";
import incomeSlice from "./slices/incomeSlice";
import { useDispatch } from "react-redux";

const reduxStore = configureStore({
  reducer: {
    incomes: incomeSlice.reducer,
    expenses: expenseSlice.reducer,
  },
});

export type AppDispatch = typeof reduxStore.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof reduxStore.getState>;

export default reduxStore;
