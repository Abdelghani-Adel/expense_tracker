import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard/Dashboard";
import ExpensePage from "./pages/ExpensesPage/ExpensePage";
import IncomesPage from "./pages/IncomesPage/IncomesPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="expenses" element={<ExpensePage />}></Route>
          <Route path="incomes" element={<IncomesPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
