import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  Expense,
  expenseActions,
  selectExpenses,
} from "../../../redux/slices/expenseSlice";
import Actions from "./Actions";
import ExpenseAmount from "./ExpenseAmount";
import ExpenseCategory from "./ExpenseCategory";
import ExpenseDate from "./ExpenseDate";
import ExpenseDescription from "./ExpenseDescription";

const ExpenseDetails: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const expensesState = useSelector(selectExpenses);

  // a boolean state to be used for deciding editing availability for the form
  const [editable, setEditable] = useState<boolean>(false);

  // Selecting the expense object from the state
  const expenseIndex = expensesState.findIndex(
    (expense) => expense.id == Number(params.id)
  );
  const expense = expensesState[expenseIndex];

  // Defining a state for the new expense object to be dispatched
  const [expenseObject, setExpenseObject] = useState<Expense>({
    id: expense.id,
    amount: expense.amount,
    category: expense.category,
    date: expense.date,
    description: expense.description,
  });

  // Handlers
  const editHandler = () => setEditable(true);

  const blurHandler = (input: Expense) => {
    setExpenseObject((prev) => ({ ...prev, ...input }));
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(expenseActions.editExpense(expenseObject));
    navigate(-1);
  };

  return (
    <div className="row p-5">
      <h2 className="text-center">Expense Details</h2>
      <form className="d-flex align-items-end" onSubmit={submitHandler}>
        <ExpenseAmount
          onBlur={blurHandler}
          amount={expense?.amount}
          readonly={!editable}
        />
        <ExpenseCategory
          onBlur={blurHandler}
          category={expense?.category}
          readonly={!editable}
        />
        <ExpenseDescription
          description={expense?.description}
          readonly={!editable}
          onBlur={blurHandler}
        />
        <ExpenseDate date={expense?.date} />
        <Actions editable={editable} edithandler={editHandler} />
      </form>
    </div>
  );
};

export default ExpenseDetails;
