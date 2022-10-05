import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Exported ? to be used as a type wherever I expect an income object
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
      category: "Gas",
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
      category: "Doctor",
      description: "Dentist Doctor",
      date: "10/3/2022",
    },
  ],
};

// const initialState: Expense[] = [
//   {
//     id: 1,
//     amount: 400,
//     category: "Gas",
//     description: "Filling my car",
//     date: "10/2/2022",
//   },
//   {
//     id: 2,
//     amount: 250,
//     category: "Market",
//     description: "Buying fruites from the market",
//     date: "10/3/2022",
//   },
//   {
//     id: 3,
//     amount: 150,
//     category: "Doctor",
//     description: "Dentist Doctor",
//     date: "10/3/2022",
//   },
// ];

const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<Expense>) => {
      state.expensesTransactions.push(action.payload);
    },
    removeExpense: (state, action: PayloadAction<number>) => {
      const fitleredExpenses = state.expensesTransactions.filter(
        (expense) => expense.id !== action.payload
      );
      state.expensesTransactions = fitleredExpenses;
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

export const expenseActions = expenseSlice.actions;
export default expenseSlice;
