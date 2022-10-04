import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <Link to="dashboard" className="navbar-brand">
          Expense Tracker
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="dashboard" className="nav-link">
              Dashboard
            </Link>
            <Link to="expenses" className="nav-link">
              Expenses
            </Link>
            <Link to="incomes" className="nav-link">
              Incomes
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
