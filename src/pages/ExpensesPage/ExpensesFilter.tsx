import { useSelector } from "react-redux";
import { selectExpensesCategories } from "../../redux/slices/expenseSlice";

interface StateFilter {
  category: string[];
  startDate: string;
  endDate: string;
}

interface Props {
  filterHandler: (input: StateFilter) => any;
  filters: StateFilter;
  allCategories: string[];
}

const ExpensesFilters: React.FC<Props> = (props) => {
  const categories = useSelector(selectExpensesCategories);
  const onChangeHandler = (e: React.FocusEvent<HTMLSelectElement>) => {
    // if (all categories)
    if (e.target.value === "All Categories") {
      props.filterHandler({
        ...props.filters,
        category: props.allCategories,
      });
    } else {
      props.filterHandler({
        ...props.filters,
        category: [`${e.target.value}`],
      });
    }
  };

  return (
    <div className="col-2">
      <select className="form-select select mb-2" onChange={onChangeHandler}>
        <option value="All Categories">All Categories</option>
        {categories.map((category) => (
          <option key={category.id} value={category.title}>
            {category.title}
          </option>
        ))}
      </select>
      {/* <label className="form-label text-muted">Filter Category</label> */}
    </div>
  );
};

export default ExpensesFilters;
