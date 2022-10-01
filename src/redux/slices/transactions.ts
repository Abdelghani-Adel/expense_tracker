import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    date: "9/1/2022",
    type: "income",
    amount: "7050",
    category: "salary",
    description: "salary from the company",
  },
  {
    id: "2",
    date: "9/15/2022",
    type: "expense",
    amount: "300",
    category: "market",
    description: "food from the market",
  },
  {
    id: "3",
    date: "9/15/2022",
    type: "expense",
    amount: "180",
    category: "gym",
    description: "Gym subscription",
  },
  {
    id: "4",
    date: "9/20/2022",
    type: "expense",
    amount: "200",
    category: "car",
    description: "Gas refill",
  },
];

const transactions = createSlice({
  name: "",
  initialState,
  reducers: {
    addTransaction: () => {},
    removeTransaction: () => {},
  },
});

export const transactionsActions = transactions.actions;

export default transactions;
