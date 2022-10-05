import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Expense, expenseActions } from "../../redux/slices/expenseSlice";
import ExpenseAmount from "./ExpenseAmount";
import ExpenseDescription from "./ExpenseDescription";
import ExpenseCategory from "./ExpenseCategory";

const AddExpense = () => {
  const dispatch = useDispatch();

  const [expenseObject, setExpenseObject] = useState<Expense>({
    id: Math.random(),
    amount: 0,
    category: "category",
    date: new Date().toLocaleDateString(),
    description: "description",
  });

  type BlurInput = {
    amount?: number;
    category?: string;
    description?: string;
  };

  const onBlurHandler = (input: BlurInput) => {
    setExpenseObject((prev) => ({ ...prev, ...input }));
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(expenseActions.addExpense(expenseObject));
  };

  return (
    <div className="modal-overlay w-25 bg-white p-2 rounded">
      <form action="" className=" g-2" onSubmit={submitHandler}>
        <h4 className="text-secondary text-center my-3">Adding New Expense</h4>
        <ExpenseAmount onBlur={onBlurHandler} />
        <ExpenseCategory onBlur={onBlurHandler} />
        <ExpenseDescription onBlur={onBlurHandler} />
        <button className="btn btn-danger d-block m-auto w-25">Add</button>
      </form>
    </div>
  );
};

export default AddExpense;
