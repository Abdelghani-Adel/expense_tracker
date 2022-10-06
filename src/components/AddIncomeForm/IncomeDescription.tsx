import React from "react";
import AddIncomeInputProps from "./AddIncomeformModels";

const IncomeDescription: React.FC<AddIncomeInputProps> = (props) => {
  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    props.updateNewIncomeState({ description: e.currentTarget.value });
  };

  return (
    <input
      type="text"
      className="form-control w-75 m-auto mb-3"
      placeholder="Enter Description"
      onBlur={onBlurHandler}
    />
  );
};

export default IncomeDescription;
