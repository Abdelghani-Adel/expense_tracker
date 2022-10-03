import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Expense, expenseActions } from "../../../redux/slices/expenseSlice";
import IncomeAmount from "./IncomeAmount";
import IncomeDescription from "./IncomeDescription";
import IncomeCategory from "./IncomeCategory";
import { Income, incomeActions } from "../../../redux/slices/incomeSlice";

const AddIncome = () => {
  const dispatch = useDispatch();

  const [incomeObject, setIncomeObject] = useState<Income>({
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
    setIncomeObject((prev) => ({ ...prev, ...input }));
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(incomeActions.addIncome(incomeObject));
  };

  return (
    <div className="modal-overlay w-25 bg-white p-2 rounded">
      <form action="" className=" g-2" onSubmit={submitHandler}>
        <h4 className="text-secondary text-center my-3">Adding New Income</h4>
        <IncomeAmount onBlur={onBlurHandler} />
        <IncomeCategory onBlur={onBlurHandler} />
        <IncomeDescription onBlur={onBlurHandler} />
        <button className="btn btn-danger d-block m-auto w-25">Add</button>
      </form>
    </div>
  );
};

export default AddIncome;
