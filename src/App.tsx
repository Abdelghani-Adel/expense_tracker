import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Dashboard from "./pages/Dashboard/Dashboard";
import ExpenseDetails from "./pages/ExpensesPage/ExpenseDetails";
import ExpensesPage from "./pages/ExpensesPage/ExpensesPage";
import IncomeDetails from "./pages/IncomesPage/IncomeDetails";
import IncomesPage from "./pages/IncomesPage/IncomesPage";
import { incomeActions, selectIncomes } from "./redux/slices/incomeSlice";

import { ReactNotifications } from "react-notifications-component";
import useFetch from "./hooks/useFetch";

import axios from "axios";

function App() {
  const incomesState = useSelector(selectIncomes);
  const dispatch = useDispatch();

  // Fetching data from Firebase backend
  useEffect(() => {
    const getData = async () => {
      axios({
        url: "https://expense-tracker-3996f-default-rtdb.firebaseio.com/incomes.json",
        method: "put",
        data: incomesState,
      });
      const response = await axios.get(
        `https://expense-tracker-3996f-default-rtdb.firebaseio.com/incomes.json`
      );

      const newTransactions = Object.entries(response.data);

      dispatch(incomeActions.replaceIncomes(newTransactions));
    };
    getData();
  }, []);

  // let isInitial = true;
  // useEffect(() => {
  //   if (isInitial) {
  //     isInitial = false;
  //     return;
  //   }
  //   const sendIncomes = async () => {
  //     const response = await fetch(
  //       "https://expense-tracker-3996f-default-rtdb.firebaseio.com/incomes.json",
  //       { method: "PUT", body: JSON.stringify(incomesState) }
  //     );

  //     if (!response.ok) {
  //       throw new Error("Sending data failed");
  //     }

  //     const responseData = await response.json();
  //   };

  //   sendIncomes();
  // }, [incomesState]);

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
