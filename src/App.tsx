import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard/Dashboard";
import ExpenseDetails from "./pages/ExpensesPage/ExpenseDetails/ExpenseDetails";
import ExpensePage from "./pages/ExpensesPage/ExpensePage";
import IncomesPage from "./pages/IncomesPage/IncomesPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="expenses" element={<ExpensePage />}>
            <Route path=":id" element={<ExpenseDetails />} />
          </Route>
          <Route path="incomes" element={<IncomesPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
