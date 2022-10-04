import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard/Dashboard";
import ExpenseDetails from "./pages/ExpensesPage/ExpenseDetails";
import ExpensePage from "./pages/ExpensesPage/ExpensePage";
import IncomeDetails from "./pages/IncomesPage/IncomeDetails/IncomeDetails";
import IncomesPage from "./pages/IncomesPage/IncomesPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="expenses" element={<ExpensePage />} />
          <Route path="expenses/:id" element={<ExpenseDetails />} />
          <Route path="incomes" element={<IncomesPage />} />
          <Route path="incomes/:id" element={<IncomeDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
