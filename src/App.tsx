import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Dashboard from "./pages/Dashboard/Dashboard";
import ExpenseDetails from "./pages/ExpensesPage/ExpenseDetails";
import ExpensesPage from "./pages/ExpensesPage/ExpensesPage";
import IncomeDetails from "./pages/IncomesPage/IncomeDetails";
import IncomesPage from "./pages/IncomesPage/IncomesPage";

function App() {
  return (
    <div className="App">
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
