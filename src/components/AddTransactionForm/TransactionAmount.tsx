import React from "react";
import { TransactionInputProps } from "../../interfaces/Transaction";

const TransactionAmount: React.FC<TransactionInputProps> = (props) => {
  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    props.updateNewTransactionState({ amount: Number(e.currentTarget.value) });
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

export default TransactionAmount;
