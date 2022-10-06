import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { expenseActions } from "../../redux/slices/expenseSlice";
import { UpdateInput } from "./AddExpenseformModels";
import ExpenseAmount from "./ExpenseAmount";
import ExpenseCategory from "./ExpenseCategory";
import ExpenseDescription from "./ExpenseDescription";

const AddExpenseForm: React.FC<{ closePortal: () => void }> = (props) => {
  const dispatch = useDispatch();

  /** Holding the new income object to be dispatched to the store on form submission */
  const [newExpense, setNewExpense] = useState({
    id: Math.random(),
    amount: 0,
    category: "",
    date: new Date().toLocaleDateString(),
    description: "",
  });

  /** Update function to be passed to child components for updating the new income object that stored in the state */
  const updateNewExpenseState = (input: UpdateInput) => {
    setNewExpense((prev) => ({ ...prev, ...input }));
  };

  /** Form Submission */
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(expenseActions.addExpense(newExpense));
    props.closePortal();
  };

  return (
    <div className="modal-overlay w-25 bg-white p-2 rounded">
      <form action="" className=" g-2" onSubmit={submitHandler}>
        <h4 className="text-secondary text-center my-3">Adding New Expense</h4>
        <ExpenseAmount updateNewExpenseState={updateNewExpenseState} />
        <ExpenseCategory updateNewExpenseState={updateNewExpenseState} />
        <ExpenseDescription updateNewExpenseState={updateNewExpenseState} />
        <button className="btn btn-danger d-block m-auto w-25">Add</button>
      </form>
    </div>
  );
};

export default AddExpenseForm;
