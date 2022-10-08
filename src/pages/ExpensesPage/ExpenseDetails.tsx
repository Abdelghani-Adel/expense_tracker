import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailsForm from "../../components/DetailsForm/DetailsForm";
import {
  Expense,
  expenseActions,
  selectExpenses,
  selectExpensesCategories,
} from "../../redux/slices/expenseSlice";

const ExpenseDetails: React.FC = () => {
  const dispatch = useDispatch();
  const params = useParams();

  /** Selecting the expense object based on the url parameter which is an ID for the right object */
  /** findIndex() used instead of find() ? using find() directly may return undefined and that is not the right type  */
  const expensesState = useSelector(selectExpenses);
  const expenseIndex = expensesState.findIndex(
    (expense) => expense.id == Number(params.id)
  );
  const expense = expensesState[expenseIndex];

  /** Selecting categories which will be used in DetailsForm component to render the <Select> when activating form editing */
  const categories = useSelector(selectExpensesCategories);

  /** dispatch function which will be executed in DetailsForm with the needed data from that form */
  /** I just declared it here to use the right acions which is for example editExpense() */
  const dispatchFun = (input: Expense) => {
    /** The input will constructed in DetailsForm component and this function will be executed there */
    dispatch(expenseActions.editExpense(input));
  };

  return (
    <div className="row p-5">
      <h2 className="text-center">Expense Details</h2>
      {/* <DetailsForm
        categories={categories}
        dataObject={expense}
        dispatchFun={dispatchFun}
      /> */}
    </div>
  );
};

export default ExpenseDetails;
