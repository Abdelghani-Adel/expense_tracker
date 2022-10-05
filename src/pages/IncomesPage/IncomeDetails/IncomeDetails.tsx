import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailsForm from "../../../components/DetailsForm/DetailsForm";
import {
  Income,
  incomeActions,
  selectIncomes,
} from "../../../redux/slices/incomeSlice";

const IncomeDetails: React.FC = () => {
  const dispatch = useDispatch();
  const params = useParams();

  // Selecting the income object from state
  const incomesState = useSelector(selectIncomes);
  const incomeIndex = incomesState.findIndex(
    (income) => income.id == Number(params.id)
  );
  const income = incomesState[incomeIndex];

  const dispatchFun = (input: Income) => {
    dispatch(incomeActions.editIncome(input));
  };

  return (
    <div className="row p-5">
      <h2 className="text-center">Income Details</h2>
      <DetailsForm dataObject={income} dispatchFun={dispatchFun} />
    </div>
  );
};

export default IncomeDetails;
