import React from "react";

type BlurInput = {
  amount?: number;
  category?: string;
  description?: string;
};
interface Props {
  onBlur: (input: BlurInput) => any;
}

const ExpenseAmount: React.FC<Props> = (props) => {
  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    props.onBlur({ amount: Number(e.currentTarget.value) });
  };
  return (
    <input
      type="number"
      className="form-control w-75 m-auto mb-3"
      placeholder="Enter Amount"
      onBlur={onBlurHandler}
    />
  );
};

export default ExpenseAmount;
