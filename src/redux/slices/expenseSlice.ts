import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import InitialExepses from "../InitialData/InitialExpenses";
import { TransactionObject } from "../../interfaces/Transaction";
import { AppDispatch, RootState } from "../store";
import axios from "axios";

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

/** Get Data Thunk */
export const getExpensesData = () => {
  return async (dispatch: AppDispatch) => {
    const getRequest = await axios.get(
      "https://expense-tracker-3996f-default-rtdb.firebaseio.com/expenses.json"
    );
    dispatch(expenseActions.replaceExpenses(getRequest.data));
  };
};

/** Send Data Thunk */
export const sendExpensesData = (ExpensesData: any) => {
  return async () => {
    try {
      const response = await axios.put(
        "https://expense-tracker-3996f-default-rtdb.firebaseio.com/expenses.json",
        ExpensesData
      );
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
};

/** Export Selectors */

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
