import React from "react";
import { useSelector } from "react-redux";
import { selectIncomesCategories } from "../../redux/slices/incomeSlice";
import AddIncomeInputProps from "./AddIncomeformModels";

const IncomeCategory: React.FC<AddIncomeInputProps> = (props) => {
  const categories = useSelector(selectIncomesCategories);
  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    props.updateNewIncomeState({ category: e.currentTarget.value });
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

export default IncomeCategory;
