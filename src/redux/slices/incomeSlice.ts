import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { TransactionObject } from "../../interfaces/Transaction";
import InitialIncomes from "../InitialData/InitialIncomes";
import { AppDispatch, RootState } from "../store";

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
      delete state.transctions[String(action.payload)];
    },
    editIncome: (state, action: PayloadAction<TransactionObject>) => {
      state.transctions[String(action.payload.id)] = action.payload;
    },
  },
  // extraReducers(builder) {
  //   builder.addCase(getAsyncData.fulfilled, (state, action) => {
  //     state.transctions = action.payload;
  //   });
  // },
});

/** Get Thunk */
// export const getAsyncData = createAsyncThunk("", async () => {
//   const response = await axios.get(
//     "https://expense-tracker-3996f-default-rtdb.firebaseio.com/incomes.json"
//   );
//   return response.data;
// });
export const getIncomesData = () => {
  return async (dispatch: AppDispatch) => {
    const getRequest = await axios.get(
      "https://expense-tracker-3996f-default-rtdb.firebaseio.com/incomes.json"
    );
    dispatch(incomeActions.replaceIncomes(getRequest.data));
  };
};

/** Send Thunk */
export const sendIncomesData = (incomesData: any) => {
  return async () => {
    try {
      const response = await axios.put(
        "https://expense-tracker-3996f-default-rtdb.firebaseio.com/incomes.json",
        incomesData
      );
      // console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
};

/** Exporting Selectors */
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

/** Exporting slice and actions */
export const incomeActions = incomeSlice.actions;
export default incomeSlice;
