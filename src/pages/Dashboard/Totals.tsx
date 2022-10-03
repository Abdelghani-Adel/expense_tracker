import { useSelector } from "react-redux";
import { selectExpenses } from "../../redux/slices/expenseSlice";
import { selectIncomes } from "../../redux/slices/incomeSlice";

const Totals = () => {
  const expensesState = useSelector(selectExpenses);
  const incomesState = useSelector(selectIncomes);

  let totalExpenses = 0;
  let totalIncomes = 0;
  for (let i = 0; i < expensesState.length; i++) {
    totalExpenses += expensesState[i].amount;
  }
  for (let i = 0; i < incomesState.length; i++) {
    totalIncomes += incomesState[i].amount;
  }

  let balance = totalIncomes - totalExpenses;

  return (
    <div className="row g-3 mt-3">
      <h2 className="text-center fw-bolder">Total Amounts</h2>
      <div className="col-md-3">
        <div className="border border-2 rounded p-2 text-success">
          <h3 className="text-secondary fw-bold">Income</h3>
          <p className="display-4 fw-bolder">{totalIncomes}$</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="border border-2 rounded p-2 text-danger">
          <h3 className="text-secondary fw-bold">Expenses</h3>
          <p className="display-4 fw-bolder">{totalExpenses}$</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="border border-2 rounded p-2 text-primary">
          <h3 className="text-secondary fw-bold">Balance</h3>
          <p className="display-4 fw-bolder">{balance}$</p>
        </div>
      </div>

      <div className="col-md-3">
        <div className="border border-2 rounded p-2 text-success">
          <h3 className="text-secondary fw-bold">Savings</h3>
          <p className="display-4 fw-bolder">0$</p>
        </div>
      </div>
    </div>
  );
};

export default Totals;
