import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailsForm from "../../components/DetailsForm/DetailsForm";
import {
  incomeActions,
  selectIncomes,
  selectIncomesCategories,
} from "../../redux/slices/incomeSlice";
import { TransactionObject } from "../../interfaces/Transaction";

const IncomeDetails: React.FC = () => {
  const dispatch = useDispatch();
  const params = useParams();

  /** Selecting the expense object based on the url parameter which is an ID for the right object */
  /** findIndex() used instead of find() ? using find() directly may return undefined and that is not the right type  */
  const incomesState = useSelector(selectIncomes);
  const incomeIndex = incomesState.findIndex(
    (income) => income.id == Number(params.id)
  );
  const income = incomesState[incomeIndex];

  /** Selecting categories which will be used in DetailsForm component to render the <Select> when activating form editing */
  const categories = useSelector(selectIncomesCategories);

  /** dispatch function which will be executed in DetailsForm with the needed data from that form */
  /** I just declared it here to use the right acions which is for example editExpense() */
  const dispatchFun = (input: TransactionObject) => {
    /** The input will constructed in DetailsForm component and this function will be executed there */
    dispatch(incomeActions.editIncome(input));
  };

  const deleteFun = () => {
    dispatch(incomeActions.removeIncome(Number(params.id)));
  };

  return (
    <div className="row p-5">
      <h2 className="text-center">Income Details</h2>
      <DetailsForm
        categories={categories}
        dataObject={income}
        dispatchFun={dispatchFun}
        deleteFun={deleteFun}
      />
    </div>
  );
};

export default IncomeDetails;
