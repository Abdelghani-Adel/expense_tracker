import { useState } from "react";
import { useSelector } from "react-redux";
import AddTransactionBtn from "../../components/AddTransactionForm/AddTransactionBtn";
import {
  selectExpenses,
  selectExpensesCategories,
} from "../../redux/slices/expenseSlice";
import ExpensesCategoryFilter from "./ExpensesCategoryFilter";
import ExpensesTable from "./ExpensesTable";

const ExpensesPage = () => {
  /** Constructing an array of strings that holds the categories I want to show */
  let categories: string[] = [];
  /** Mapping through categories objects to pull out only the title and push it to the array of strings */
  const categoriesState = useSelector(selectExpensesCategories);

  /** A state holds array to be used in the filteration process */
  /** Initially it is all categories that we pulled out and store them in a const categories */
  const [categoriesArray, setCategoriesArray] = useState(categoriesState);

  /** Updater function to update the state array which we used in the filteration */
  const filterCategories = (input: string | string[]) => {
    /** In case the user changes the filter from all category to show only one category */
    if (typeof input === "string") {
      setCategoriesArray([input]);
    } else if (Array.isArray(input)) {
      /** In case the user choose all categories, the input in this case is string[] so I update the state with it directoy */
      setCategoriesArray(input);
    }
  };

  /** Filteration Process */
  const expensesState = useSelector(selectExpenses);
  let filteredExpenses = expensesState;
  filteredExpenses = filteredExpenses.filter((expense) => {
    if (categoriesArray.includes(expense.category)) {
      return expense;
    }
  });

  return (
    <div className="row p-2">
      <div className="d-flex align-items-start justify-content-between">
        <AddTransactionBtn />

        <ExpensesCategoryFilter
          updateCategoriesFilter={filterCategories}
          allCategories={categoriesState}
        />
      </div>

      <div>
        <ExpensesTable expensesArray={filteredExpenses} />
      </div>
    </div>
  );
};

export default ExpensesPage;
