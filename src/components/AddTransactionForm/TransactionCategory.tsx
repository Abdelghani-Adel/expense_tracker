import React from "react";
import { useSelector } from "react-redux";
import { TransactionInputProps } from "../../interfaces/Transaction";
import { selectExpensesCategories } from "../../redux/slices/expenseSlice";
import { selectIncomesCategories } from "../../redux/slices/incomeSlice";

interface props extends TransactionInputProps {
  transactionType: string;
}

const TransactionCategory: React.FC<props> = (props) => {
  const expenseCategories = useSelector(selectExpensesCategories);
  const incomeCategories = useSelector(selectIncomesCategories);

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    props.updateNewTransactionState({ category: e.currentTarget.value });
  };

  return (
    <select
      className="form-select w-75 m-auto mb-3"
      defaultValue={"Choose Category"}
      onChange={onChangeHandler}
    >
      <option value="Choose Category" disabled>
        Choose Category
      </option>

      {props.transactionType === "Expense" &&
        expenseCategories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}

      {props.transactionType === "Income" &&
        incomeCategories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
    </select>
  );
};

export default TransactionCategory;
