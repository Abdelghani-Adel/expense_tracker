import { useSelector } from "react-redux";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard/Dashboard";
import { selectIncomes } from "./redux/slices/incomeSlice";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
