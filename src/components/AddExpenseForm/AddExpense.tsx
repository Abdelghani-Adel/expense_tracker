import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Expense, expenseActions } from "../../redux/slices/expenseSlice";
import ExpenseAmount from "./ExpenseAmount";
import ExpenseDescription from "./ExpenseDescription";
import ExpenseCategory from "./ExpenseCategory";

interface Props {
  closePortal: () => any;
}

// interface used as an input type in the onBlurHandler which updates the state object
interface BlurInput {
  amount?: number;
  category?: string;
  description?: string;
}

// COMPONENT //
const AddExpenseForm: React.FC<Props> = (props) => {
  const dispatch = useDispatch();

  // State that holds the new Expense object to be dispatched to the store on submittion
  const [expenseObject, setExpenseObject] = useState<Expense>({
    id: Math.random(),
    amount: 0,
    category: "category",
    date: new Date().toLocaleDateString(),
    description: "description",
  });

  // Handlers
  const onBlurHandler = (input: BlurInput) => {
    setExpenseObject((prev) => ({ ...prev, ...input }));
  };
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(expenseActions.addExpense(expenseObject));
    props.closePortal();
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

export default AddExpenseForm;
