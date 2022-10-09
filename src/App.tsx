import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Dashboard from "./pages/Dashboard/Dashboard";
import ExpenseDetails from "./pages/ExpensesPage/ExpenseDetails";
import ExpensesPage from "./pages/ExpensesPage/ExpensesPage";
import IncomeDetails from "./pages/IncomesPage/IncomeDetails";
import IncomesPage from "./pages/IncomesPage/IncomesPage";
import {
  getIncomesData,
  incomeActions,
  selectIncomes,
  sendIncomesData,
} from "./redux/slices/incomeSlice";

import { ReactNotifications } from "react-notifications-component";

import axios from "axios";
import { expenseActions, selectExpenses } from "./redux/slices/expenseSlice";
import { useAppDispatch } from "./redux/store";

const api = axios.create({
  baseURL: "https://expense-tracker-3996f-default-rtdb.firebaseio.com/",
});

let isInitial = true;

function App() {
  const incomesState = useSelector(selectIncomes);
  const expensesState = useSelector(selectExpenses);
  const dispatch = useAppDispatch();

  /** Fetching from Firebase API and update the state with the response */
  useEffect(() => {
    dispatch(getIncomesData());
  }, []);

  /** Update Firebase API whenever the redux incomes state got updated */
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendIncomesData(incomesState));
  }, [incomesState]);

  return (
    <div className="App">
      <ReactNotifications />
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="expenses" element={<ExpensesPage />} />
          <Route path="expenses/:id" element={<ExpenseDetails />} />
          <Route path="incomes" element={<IncomesPage />} />
          <Route path="incomes/:id" element={<IncomeDetails />} />
          <Route path="*" element={<Navigate to="dashboard" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
