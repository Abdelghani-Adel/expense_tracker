import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectExpenses } from "../../redux/slices/expenseSlice";
import { selectIncomes } from "../../redux/slices/incomeSlice";

const Totals = () => {
  const expensesState = useSelector(selectExpenses);
  const incomesState = useSelector(selectIncomes);
  let navigate = useNavigate();

  let totalExpenses = 0;
  let totalIncomes = 0;
  for (let i = 0; i < expensesState.length; i++) {
    totalExpenses += expensesState[i].amount;
  }
  for (let i = 0; i < incomesState.length; i++) {
    totalIncomes += incomesState[i].amount;
  }
  let balance = totalIncomes - totalExpenses;

  const incomeClick = () => navigate("/incomes");
  const expenseClick = () => navigate("/expenses");

  return (
    <div className="col-12 my-2">
      <div className="row g-3">
        <h2 className="text-center fw-bolder">Total Amounts</h2>
        <div className="col-md-3" onClick={incomeClick}>
          <div className="border border-2 rounded p-1 text-success">
            <h4 className="text-secondary fw-bold">Income</h4>
            <p className="display-6 fw-bolder">{totalIncomes}$</p>
          </div>
        </div>
        <div className="col-md-3" onClick={expenseClick}>
          <div className="border border-2 rounded p-1 text-danger">
            <h4 className="text-secondary fw-bold">Expenses</h4>
            <p className="display-6 fw-bolder">{totalExpenses}$</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="border border-2 rounded p-1 text-primary">
            <h4 className="text-secondary fw-bold">Balance</h4>
            <p className="display-6 fw-bolder">{balance}$</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="border border-2 rounded p-1 text-success">
            <h4 className="text-secondary fw-bold">Savings</h4>
            <p className="display-6 fw-bolder">0$</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Totals;
