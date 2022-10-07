import React from "react";
import AddExpenseInputProps from "./AddExpenseformModels";

const ExpenseDescription: React.FC<AddExpenseInputProps> = (props) => {
  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    props.updateNewExpenseState({ description: e.currentTarget.value });
  };

  return (
    <input
      type="text"
      className="form-control w-75 m-auto mb-3"
      placeholder="Enter Description"
      // onBlur={onBlurHandler}
      onBlurCapture={onBlurHandler}
    />
  );
};

export default ExpenseDescription;
