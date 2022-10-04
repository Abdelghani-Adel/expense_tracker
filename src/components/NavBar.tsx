import { Link, NavLink } from "react-router-dom";

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
            <NavLink to="dashboard" className="nav-link">
              Dashboard
            </NavLink>
            <NavLink to="expenses" className="nav-link">
              Expenses
            </NavLink>
            <NavLink to="incomes" className="nav-link">
              Incomes
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
