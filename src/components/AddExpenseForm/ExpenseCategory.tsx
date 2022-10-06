import React from "react";
import { useSelector } from "react-redux";
import { selectExpensesCategories } from "../../redux/slices/expenseSlice";
import AddExpenseInputProps from "./AddExpenseformModels";

const ExpenseCategory: React.FC<AddExpenseInputProps> = (props) => {
  const categories = useSelector(selectExpensesCategories);
  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    props.updateNewExpenseState({ category: e.currentTarget.value });
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
      {categories.map((category) => (
        <option key={category.id} value={category.title}>
          {category.title}
        </option>
      ))}
    </select>
  );
};

export default ExpenseCategory;
