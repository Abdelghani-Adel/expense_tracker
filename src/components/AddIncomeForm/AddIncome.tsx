import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Income, incomeActions } from "../../redux/slices/incomeSlice";
import IncomeAmount from "./IncomeAmount";
import IncomeCategory from "./IncomeCategory";
import IncomeDescription from "./IncomeDescription";

const AddIncomeForm: React.FC<{ closePortal: () => void }> = (props) => {
  const dispatch = useDispatch();

  /** Holding the new income object to be dispatched to the store on form submission */
  const [newIncome, setNewIncome] = useState({
    id: Math.random(),
    amount: 0,
    category: "",
    date: new Date().toLocaleDateString(),
    description: "",
  });

  /** Update function to be passed to child components for updating the new income object that stored in the state */
  interface UpdateInput {
    amount?: number;
    category?: string;
    description?: string;
  }
  const updateNewIncomeState = (input: UpdateInput) => {
    setNewIncome((prev) => ({ ...prev, ...input }));
  };

  /** Form Submission */
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(incomeActions.addIncome(newIncome));
    props.closePortal();
  };

  return (
    <div className="modal-overlay w-25 bg-white p-2 rounded">
      <form action="" className=" g-2" onSubmit={submitHandler}>
        <h4 className="text-secondary text-center my-3">Adding New Income</h4>
        <IncomeAmount updateNewIncomeState={updateNewIncomeState} />
        <IncomeCategory onBlur={updateNewIncomeState} />
        <IncomeDescription onBlur={updateNewIncomeState} />
        <button className="btn btn-danger d-block m-auto w-25">Add</button>
      </form>
    </div>
  );
};

export default AddIncomeForm;
