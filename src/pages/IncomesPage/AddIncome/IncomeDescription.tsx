import React from "react";

type BlurInput = {
  amount?: number;
  category?: string;
  description?: string;
};
interface Props {
  onBlur: (input: BlurInput) => any;
}

const IncomeDescription: React.FC<Props> = (props) => {
  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    props.onBlur({ description: e.currentTarget.value });
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
