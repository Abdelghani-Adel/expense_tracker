import React from "react";
import { TransactionInputProps } from "../../interfaces/Transaction";

const TransactionDesctiption: React.FC<TransactionInputProps> = (props) => {
  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    props.updateNewTransactionState({ description: e.currentTarget.value });
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

export default TransactionDesctiption;
