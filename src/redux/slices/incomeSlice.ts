import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
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
  ],

  totalIncomes: 8490, // 7040 + 1450
};

const incomeSlice = createSlice({
  name: "incomes",
  initialState,
  reducers: {
    replaceIncomes: (state, action) => {
      state.incomesTransactions = action.payload;
    },
    addIncome: (state, action: PayloadAction<Income>) => {
      state.incomesTransactions.push(action.payload);
      state.totalIncomes += Number(action.payload.amount);
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

// export const sendData = (data: any) => {
//   return async (dispatch: any) => {
//     dispatch();

//     const sendRequest = async () => {
//       const response = await fetch(
//         "https://expense-tracker-3996f-default-rtdb.firebaseio.com/incomes.json",
//         { method: "PUT", body: JSON.stringify(data) }
//       );

//       if (!response.ok) {
//         throw new Error("Sending data failed");
//       }

//       const responseData = await response.json();
//     };

//     await sendRequest();
//   };
// };

export const incomeActions = incomeSlice.actions;

// export const fetchData = () => {
//   return async (dispatch) => {
//     const fetchData = async () => {
//       const response = await fetch(
//         "https://expense-tracker-3996f-default-rtdb.firebaseio.com/incomes.json"
//       );

//       if (!response.ok) {
//         throw new Error("fetching data failed!");
//       }

//       const data = await response.json();

//       return data;
//     };

//     try {
//       const incomeData = await fetchData();
//       dispatch(incomeActions.replaceIncomes(incomeData));
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

export const selectIncomes = (state: RootState) =>
  state.incomes.incomesTransactions;

export const selectIncomesCategories = (state: RootState) =>
  state.incomes.incomesCategoreis;

export const selectTotalIncomes = (state: RootState) =>
  state.incomes.totalIncomes;

export default incomeSlice;
