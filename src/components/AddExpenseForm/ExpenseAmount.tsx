import React from "react";
import AddExpenseInputProps from "./AddExpenseformModels";

const ExpenseAmount: React.FC<AddExpenseInputProps> = (props) => {
  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    props.updateNewExpenseState({ amount: Number(e.currentTarget.value) });
  };

  return (
    <input
      type="number"
      className="form-control w-75 m-auto mb-3"
      placeholder="Enter Amount"
      // onBlur={onBlurHandler}
      onBlurCapture={onBlurHandler}
    />
  );
};

export default ExpenseAmount;
