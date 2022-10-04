import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailsForm from "../../components/DetailsForm/DetailsForm";
import {
  Expense,
  expenseActions,
  selectExpenses,
} from "../../redux/slices/expenseSlice";

const ExpenseDetails: React.FC = () => {
  const dispatch = useDispatch();
  const params = useParams();

  // Selecting the expense object from the state
  const expensesState = useSelector(selectExpenses);
  const expenseIndex = expensesState.findIndex(
    (expense) => expense.id == Number(params.id)
  );
  const expense = expensesState[expenseIndex];

  const dispatchFun = (input: Expense) => {
    dispatch(expenseActions.editExpense(input));
  };

  return (
    <div className="row p-5">
      <h2 className="text-center">Expense Details</h2>
      <DetailsForm dataObject={expense} dispatchFun={dispatchFun} />
    </div>
  );
};

export default ExpenseDetails;
