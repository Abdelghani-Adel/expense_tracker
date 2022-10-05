import { useState } from "react";
import { useSelector } from "react-redux";
import AddExpenseBtn from "../../components/Add_Buttons/AddExpenseBtn";
import {
  selectExpenses,
  selectExpensesCategories,
} from "../../redux/slices/expenseSlice";
import ExpensesFilters from "./ExpensesFilter";
import ExpensesTable from "./ExpensesTable";

interface StateFilter {
  category: string[];
  startDate: string;
  endDate: string;
}

const ExpensesPage = () => {
  const categoriesState = useSelector(selectExpensesCategories);
  let categories: string[] = [];
  categoriesState.map((category) => categories.push(category.title));

  const [expenseFilters, setExpenseFilters] = useState<StateFilter>({
    category: categories,
    startDate: "10/2/2022",
    endDate: "11/3/2022",
  });

  const filterHandler = (input: StateFilter) => {
    setExpenseFilters((prev) => ({ ...prev, ...input }));
  };

  // filter the expenses
  const expensesState = useSelector(selectExpenses);
  let filteredExpenses = expensesState;
  filteredExpenses = filteredExpenses.filter((expense) => {
    if (expenseFilters.category.includes(expense.category)) {
      if (
        expense.date >= expenseFilters.startDate &&
        expense.date <= expenseFilters.endDate
      ) {
        return expense;
      }
    }
  });

  return (
    <div className="row p-2">
      <div className="d-flex align-items-start justify-content-between">
        <AddExpenseBtn />

        <ExpensesFilters
          filters={expenseFilters}
          filterHandler={filterHandler}
          allCategories={categories}
        />
      </div>

      <div>
        <ExpensesTable expensesArray={filteredExpenses} />
      </div>
    </div>
  );
};

export default ExpensesPage;
