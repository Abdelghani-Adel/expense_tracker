import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import InitialIncomes from "../InitialData/InitialIncomes";
import { TransactionObject } from "../../interfaces/Transaction";
import { RootState } from "../store";

const incomeSlice = createSlice({
  name: "incomes",
  initialState: InitialIncomes,
  reducers: {
    replaceIncomes: (state, action) => {
      state.transctions = action.payload;
    },
    addIncome: (state, action: PayloadAction<TransactionObject>) => {
      state.transctions[action.payload.id] = action.payload;
    },
    removeIncome: (state, action: PayloadAction<number>) => {
      delete state.transctions[action.payload];
    },
    editIncome: (state, action: PayloadAction<TransactionObject>) => {
      state.transctions[String(action.payload.id)] = action.payload;
    },
  },
});

export const incomeActions = incomeSlice.actions;

export const selectIncomes = (state: RootState) => {
  return Object.values(state.incomes.transctions);
};

export const selectIncomesCategories = (state: RootState) =>
  Object.values(state.incomes.categories);

export const selectTotalIncomes = (state: RootState) => {
  let totalIncomes = 0;
  const transactionsArray = Object.values(state.incomes.transctions);
  transactionsArray.map((income) => (totalIncomes += Number(income.amount)));

  return totalIncomes;
};

export default incomeSlice;
