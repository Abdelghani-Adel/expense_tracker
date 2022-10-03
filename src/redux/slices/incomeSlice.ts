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

const initialState: Income[] = [
  {
    id: 1,
    amount: 7040,
    category: "Salary",
    description: "",
    date: "10/2/2022",
  },
];

const incomeSlice = createSlice({
  name: "incomes",
  initialState,
  reducers: {
    addIncome: (state, action: PayloadAction<Income>) => {
      state.push(action.payload);
    },
    removeIncome: (state, action: PayloadAction<number>) => {
      const filteredIncomes = state.filter(
        (income) => income.id !== action.payload
      );
      state = filteredIncomes;
    },
    editIncome: (state, action: PayloadAction<Income>) => {
      const index = state.findIndex(
        (income) => income.id === action.payload.id
      );
      state[index] = action.payload;
    },
  },
});

export const selectIncomes = (state: RootState) => state.incomes;

export const incomeActions = incomeSlice.actions;
export default incomeSlice;
