import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  expenseActions,
  selectTotalExpenses,
} from "../../redux/slices/expenseSlice";
import { selectTotalIncomes } from "../../redux/slices/incomeSlice";

const Totals = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  /** There are bugs here, will come to them later */

  let totalExpenses = useSelector(selectTotalExpenses);
  let totalIncomes = useSelector(selectTotalIncomes);
  let balance = totalIncomes - totalExpenses;

  /** Handlers to navigate to the right page, either expenses or incomes */
  const onClickIncomes = () => navigate("/incomes");
  const onClickExpenses = () => navigate("/expenses");

  return (
    <div className="col-12 mt-2 mb-4">
      <div className="row g-3 justify-content-center">
        <h3 className="text-center fw-bolder">Total Amounts</h3>
        <div className="col-md-3 cursor--pointer" onClick={onClickIncomes}>
          <div className="border border-2 rounded p-1 text-success">
            <h4 className="text-secondary fw-bold">Incomes</h4>
            <p className="display-6 fw-bolder">{totalIncomes}$</p>
          </div>
        </div>
        <div className="col-md-3 cursor--pointer" onClick={onClickExpenses}>
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
