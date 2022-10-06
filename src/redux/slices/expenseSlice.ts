import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface Expense {
  id: number;
  amount: number;
  category: string;
  description: string;
  date: string;
}

const initialState = {
  expensesCategories: [
    {
      id: 1,
      title: "Car",
      subCategories: [],
    },
    {
      id: 2,
      title: "Home",
      subCategories: [],
    },
    {
      id: 3,
      title: "Market",
      subCategories: [],
    },
    {
      id: 4,
      title: "Shopping",
      subCategories: [],
    },
  ],

  expensesTransactions: [
    {
      id: 1,
      amount: 400,
      category: "Car",
      description: "Filling my car",
      date: "10/2/2022",
    },
    {
      id: 2,
      amount: 250,
      category: "Market",
      description: "Buying fruites from the market",
      date: "10/3/2022",
    },
    {
      id: 3,
      amount: 150,
      category: "Shopping",
      description: "Amazon",
      date: "10/3/2022",
    },
    {
      id: 4,
      amount: 320,
      category: "Market",
      description: "Buying Vegetables from the Market",
      date: "10/3/2022",
    },
    {
      id: 5,
      amount: 930,
      category: "Car",
      description: "Change tires",
      date: "10/3/2022",
    },
    {
      id: 6,
      amount: 210,
      category: "Market",
      description: "Milk and cheese",
      date: "10/3/2022",
    },
    {
      id: 7,
      amount: 80,
      category: "Shopping",
      description: "Amazon",
      date: "10/3/2022",
    },
  ],

  totalExpenses: 0,
};

const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<Expense>) => {
      state.expensesTransactions.push(action.payload);
      state.totalExpenses += action.payload.amount;
    },
    removeExpense: (state, action: PayloadAction<number>) => {
      state.expensesTransactions = state.expensesTransactions.filter(
        (expense) => expense.id !== action.payload
      );
    },
    editExpense: (state, action: PayloadAction<Expense>) => {
      const index = state.expensesTransactions.findIndex(
        (expense) => expense.id === action.payload.id
      );
      state.expensesTransactions[index] = action.payload;
    },
  },
});

export const selectExpenses = (state: RootState) =>
  state.expenses.expensesTransactions;

export const selectExpensesCategories = (state: RootState) =>
  state.expenses.expensesCategories;

export const selectTotalExpenses = (state: RootState) => {
  let totalExpenses = 0;
  state.expenses.expensesTransactions.map(
    (expense) => (totalExpenses += Number(expense.amount))
  );
  return totalExpenses;
};

export const expenseActions = expenseSlice.actions;
export default expenseSlice;
