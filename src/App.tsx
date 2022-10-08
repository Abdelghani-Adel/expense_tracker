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

import axios from "axios";

const api = axios.create({
  baseURL: "https://expense-tracker-3996f-default-rtdb.firebaseio.com/",
});

let isInitial = true;

function App() {
  const incomesState = useSelector(selectIncomes);
  const dispatch = useDispatch();

  /** Updating the firebase income slice whenever it changes here in the state */
  // useEffect(() => {
  //   if (isInitial) {
  //     isInitial = false;
  //     return;
  //   }

  //   if (!isInitial) {
  //     axios({
  //       url: "https://expense-tracker-3996f-default-rtdb.firebaseio.com/incomes.json",
  //       method: "put",
  //       data: incomesState,
  //     });
  //   }
  // }, [incomesState]);

  /** Getting data from firebase, whith no dependencies[] to make it run only once */
  useEffect(() => {
    const getData = async () => {
      const response = await api.get(`incomes.json`);

      // const newTransactions = Object.entries(response.data);
      dispatch(incomeActions.replaceIncomes(response.data));
      // console.log(response.data);
    };
    // getData();
  }, []);

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
