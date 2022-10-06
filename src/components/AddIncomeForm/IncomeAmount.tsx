import React from "react";
import { InputProps } from "./AddIncomeformModels";

const IncomeAmount: React.FC<InputProps> = (props) => {
  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    props.updateNewIncomeState({ amount: Number(e.currentTarget.value) });
  };
  return (
    <input
      type="number"
      className="form-control w-75 m-auto mb-3"
      placeholder="Enter Amount"
      // onBlur={onBlurHandler}
    />
  );
};

export default IncomeAmount;
