import React from "react";
import { useSelector } from "react-redux";
import { selectIncomesCategories } from "../../redux/slices/incomeSlice";

type BlurInput = {
  amount?: number;
  category?: string;
  description?: string;
};
interface Props {
  onBlur: (input: BlurInput) => any;
}

const IncomeCategory: React.FC<Props> = (props) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    props.onBlur({ category: e.currentTarget.value });
  };
  const categories = useSelector(selectIncomesCategories);
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
