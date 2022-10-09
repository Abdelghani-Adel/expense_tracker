import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import InitialExepses from "../InitialData/InitialExpenses";
import { TransactionObject } from "../../interfaces/Transaction";
import { RootState } from "../store";

const expenseSlice = createSlice({
  name: "expenses",
  initialState: InitialExepses,
  reducers: {
    replaceExpenses: (state, action) => {
      state.transactions = action.payload;
    },
    addExpense: (state, action: PayloadAction<TransactionObject>) => {
      state.transactions[action.payload.id] = action.payload;
    },
    removeExpense: (state, action: PayloadAction<number>) => {
      delete state.transactions[action.payload];
    },
    editExpense: (state, action: PayloadAction<TransactionObject>) => {
      state.transactions[String(action.payload.id)] = action.payload;
    },
  },
});

export const selectExpenses = (state: RootState) =>
  Object.values(state.expenses.transactions);

export const selectExpensesCategories = (state: RootState) =>
  state.expenses.categories;

export const selectTotalExpenses = (state: RootState) => {
  let totalExpenses = 0;
  const transactionsArray = Object.values(state.expenses.transactions);
  transactionsArray.map((expense) => (totalExpenses += Number(expense.amount)));
  return totalExpenses;
};

export const expenseActions = expenseSlice.actions;
export default expenseSlice;
