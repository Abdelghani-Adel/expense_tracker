interface Props {
  /** two possibilities: 1=> input is one category which is a string type  */
  /** 2=> input is all categories which is a strign[] type */
  updateCategoriesFilter: (input: string | string[]) => void;

  /** will be used in case the user chooses All Categories */
  /** will be used also in rendering the options of <select> */
  allCategories: string[];
}

const ExpensesCategoryFilter: React.FC<Props> = (props) => {
  const onChangeHandler = (e: React.FocusEvent<HTMLSelectElement>) => {
    if (e.target.value === "All Categories") {
      props.updateCategoriesFilter(props.allCategories);
    } else {
      props.updateCategoriesFilter(e.target.value);
    }
  };

  return (
    <div className="col-2">
      <select className="form-select select mb-2" onChange={onChangeHandler}>
        <option value="All Categories">All Categories</option>
        {props.allCategories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpensesCategoryFilter;
