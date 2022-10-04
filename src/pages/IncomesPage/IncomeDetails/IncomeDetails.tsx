import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  Income,
  incomeActions,
  selectIncomes,
} from "../../../redux/slices/incomeSlice";
import Actions from "./Actions";
import IncomeAmount from "./IncomeAmount";
import IncomeCategory from "./IncomeCategory";
import IncomeDate from "./IncomeDate";
import IncomeDescription from "./IncomeDescription";

const IncomeDetails: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  // a boolean state to be used for deciding editing availability for the form
  const [editable, setEditable] = useState<boolean>(false);

  // Selecting the income from state
  const incomesState = useSelector(selectIncomes);
  const incomeIndex = incomesState.findIndex(
    (income) => income.id == Number(params.id)
  );
  const income = incomesState[incomeIndex];

  // Defining a state for the new income object to be dispatched
  const [incomeObject, setIncomeObject] = useState({
    id: income.id,
    amount: income.amount,
    category: income.category,
    date: income.date,
    description: income.description,
  });

  // Handlers
  const editHandler = () => setEditable(true);
  const blurHandler = (input: Income) => {
    setIncomeObject((prev) => ({ ...prev, ...input }));
  };
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(incomeActions.editIncome(incomeObject));
    navigate(-1);
  };

  return (
    <div className="row p-5">
      <h2 className="text-center">Income Details</h2>
      <form className="d-flex align-items-end" onSubmit={submitHandler}>
        <IncomeAmount
          onBlur={blurHandler}
          amount={income.amount}
          readonly={!editable}
        />
        <IncomeCategory
          onBlur={blurHandler}
          category={income.category}
          readonly={!editable}
        />
        <IncomeDescription
          onBlur={blurHandler}
          description={income.description}
          readonly={!editable}
        />
        <IncomeDate date={income.date} />
        <Actions editable={editable} edithandler={editHandler} />
      </form>
    </div>
  );
};

export default IncomeDetails;
