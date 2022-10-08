import React from "react";

interface Props {
  changeType: (input: string) => void;
}

const TransactionType: React.FC<Props> = (props) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    props.changeType(e.target.value);
  };

  return (
    <select
      className="form-select w-75 m-auto mb-3"
      defaultValue={"Choose Category"}
      onChange={onChangeHandler}
    >
      <option value="Expense">Expense</option>
      <option value="Income">Income</option>
    </select>
  );
};

export default TransactionType;
