import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectExpenses } from "../../redux/slices/expenseSlice";
import { selectIncomes } from "../../redux/slices/incomeSlice";

const Totals = () => {
  const expensesState = useSelector(selectExpenses);
  const incomesState = useSelector(selectIncomes);
  let navigate = useNavigate();

  let totalExpenses = expensesState.reduce((accu, object) => {
    return accu + object.amount;
  }, 0);

  let totalIncomes = incomesState.reduce((result, object) => {
    return result + object.amount;
  }, 0);

  let balance = totalIncomes - totalExpenses;

  const incomeClick = () => navigate("/incomes");
  const expenseClick = () => navigate("/expenses");

  return (
    <div className="col-12 mt-2 mb-4">
      <div className="row g-3 justify-content-center">
        <h2 className="text-center fw-bolder">Total Amounts</h2>
        <div className="col-md-3 cursor--pointer" onClick={incomeClick}>
          <div className="border border-2 rounded p-1 text-success">
            <h4 className="text-secondary fw-bold">Income</h4>
            <p className="display-6 fw-bolder">{totalIncomes}$</p>
          </div>
        </div>
        <div className="col-md-3 cursor--pointer" onClick={expenseClick}>
          <div className="border border-2 rounded p-1 text-danger">
            <h4 className="text-secondary fw-bold">Expenses</h4>
            <p className="display-6 fw-bolder">{totalExpenses}$</p>
          </div>
        </div>
        <div className="col-md-3 cursor--pointer">
          <div className="border border-2 rounded p-1 text-primary">
            <h4 className="text-secondary fw-bold">Balance</h4>
            <p className="display-6 fw-bolder">{balance}$</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Totals;
