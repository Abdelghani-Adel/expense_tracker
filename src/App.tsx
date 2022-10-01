import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard/Dashboard";

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
