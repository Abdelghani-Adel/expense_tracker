import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Exported ? to be used as a type wherever I expect an income object
export interface Income {
  id: number;
  amount: number;
  category: string;
  description: string;
  date: string;
}

const initialState = {
  incomesCategoreis: [
    {
      id: 1,
      title: "Salary",
      subCategories: [],
    },
    {
      id: 2,
      title: "Freelancing",
      subCategories: [],
    },
  ],

  incomesTransactions: [
    {
      id: 1,
      amount: 7040,
      category: "Salary",
      description: "Salary from the company",
      date: "10/2/2022",
    },
    {
      id: 2,
      amount: 1450,
      category: "Salary",
      description: "Reward from the company",
      date: "10/2/2022",
    },
    {
      id: 3,
      amount: 7040,
      category: "Freelance",
      description: "Freelancing jobs",
      date: "10/2/2022",
    },
  ],
};

// const initialState: Income[] = [
//   {
//     id: 1,
//     amount: 7040,
//     category: "Salary",
//     description: "Salary from the company",
//     date: "10/2/2022",
//   },
//   {
//     id: 2,
//     amount: 1450,
//     category: "Reward",
//     description: "Reward from the company",
//     date: "10/2/2022",
//   },
//   {
//     id: 3,
//     amount: 7040,
//     category: "Freelance",
//     description: "Freelancing jobs",
//     date: "10/2/2022",
//   },
// ];

const incomeSlice = createSlice({
  name: "incomes",
  initialState,
  reducers: {
    addIncome: (state, action: PayloadAction<Income>) => {
      state.incomesTransactions.push(action.payload);
    },
    removeIncome: (state, action: PayloadAction<number>) => {
      const filteredIncomes = state.incomesTransactions.filter(
        (income) => income.id !== action.payload
      );
      state.incomesTransactions = filteredIncomes;
    },
    editIncome: (state, action: PayloadAction<Income>) => {
      const index = state.incomesTransactions.findIndex(
        (income) => income.id === action.payload.id
      );
      state.incomesTransactions[index] = action.payload;
    },
  },
});

export const selectIncomes = (state: RootState) =>
  state.incomes.incomesTransactions;

export const selectIncomesCategories = (state: RootState) =>
  state.incomes.incomesCategoreis;

export const incomeActions = incomeSlice.actions;
export default incomeSlice;
