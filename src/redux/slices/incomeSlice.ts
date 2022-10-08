import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface Income {
  id: number;
  amount: number;
  category: string;
  description: string;
  date: string;
}

interface Transaction {
  [key: number]: Income;
}

const initialState = {
  transctions: <Transaction>{
    1: {
      id: 1,
      amount: 7040,
      category: "Salary",
      description: "Salary from the company",
      date: "10/2/2022",
    },
    2: {
      id: 2,
      amount: 2000,
      category: "Freelancing",
      description: "Salary from the company",
      date: "10/2/2022",
    },
    3: {
      id: 3,
      amount: 1000,
      category: "Freelancing",
      description: "Salary from the company",
      date: "10/2/2022",
    },
  },
  categories: ["Salary", "Freelancing"],
};

// const initialState = {
//   incomesCategoreis: [
//     {
//       id: 1,
//       title: "Salary",
//       subCategories: [],
//     },
//     {
//       id: 2,
//       title: "Freelancing",
//       subCategories: [],
//     },
//   ],

//   incomesTransactions: [
//     {
//       id: 1,
//       amount: 7040,
//       category: "Salary",
//       description: "Salary from the company",
//       date: "10/2/2022",
//     },
//     {
//       id: 2,
//       amount: 1450,
//       category: "Salary",
//       description: "Reward from the company",
//       date: "10/2/2022",
//     },
//   ],

//   totalIncomes: 8490, // 7040 + 1450
// };

const incomeSlice = createSlice({
  name: "incomes",
  initialState: initialState,
  reducers: {
    replaceIncomes: (state, action) => {
      state.transctions = action.payload;
    },
    addIncome: (state, action: PayloadAction<Income>) => {
      state.transctions[Math.random()] = action.payload;
    },
    removeIncome: (state, action: PayloadAction<number>) => {
      delete state.transctions[`${action.payload}`];
    },
    editIncome: (state, action: PayloadAction<Income>) => {
      // const index = state.incomesTransactions.findIndex(
      //   (income) => income.id === action.payload.id
      // );
      // state.incomesTransactions[index] = action.payload;
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
