import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Expense, expenseActions } from "../../redux/slices/expenseSlice";

const AddExpense = () => {
  const dispatch = useDispatch();
  const amountInputRef = useRef();
  const categoryInputRef = useRef();
  const descriptionInputRef = useRef();

  const [expenseObject, setExpenseObject] = useState<Expense>({
    id: Math.random(),
    amount: 0,
    category: "category",
    date: new Date().toLocaleDateString(),
    description: "description",
  });

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(expenseActions.addExpense(expenseObject));
  };

  return (
    <div className="modal-overlay w-25 bg-white p-2 rounded">
      <form action="" className=" g-2" onSubmit={submitHandler}>
        <h4 className="text-secondary text-center my-3">Adding New Expense</h4>
        <input
          type="text"
          className="form-control w-75 m-auto mb-3"
          placeholder="Amount"
        />
        <input
          type="text"
          className="form-control w-75 m-auto mb-3"
          placeholder="Category"
        />
        <input
          type="text"
          className="form-control w-75 m-auto mb-3"
          placeholder="Description"
        />
        <button className="btn btn-danger d-block m-auto w-25">Add</button>
      </form>
    </div>
  );
};

export default AddExpense;
