import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Income, incomeActions } from "../../redux/slices/incomeSlice";
import IncomeAmount from "./IncomeAmount";
import IncomeCategory from "./IncomeCategory";
import IncomeDescription from "./IncomeDescription";

interface Props {
  closePortal: () => any;
}

// interface used as an input type in the onBlurHandler which updates the state object
interface BlurInput {
  amount?: number;
  category?: string;
  description?: string;
}

// COMPONENT //
const AddIncomeForm: React.FC<Props> = (props) => {
  const dispatch = useDispatch();

  // State that holds the new Income object to be dispatched to the store on submittion
  const [incomeObject, setIncomeObject] = useState<Income>({
    id: Math.random(),
    amount: 0,
    category: "category",
    date: new Date().toLocaleDateString(),
    description: "description",
  });

  // Handlers
  const onBlurHandler = (input: BlurInput) => {
    setIncomeObject((prev) => ({ ...prev, ...input }));
  };
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(incomeActions.addIncome(incomeObject));
    props.closePortal();
  };

  return (
    <div className="modal-overlay w-25 bg-white p-2 rounded">
      <form action="" className=" g-2" onSubmit={submitHandler}>
        <h4 className="text-secondary text-center my-3">Adding New Income</h4>
        <IncomeAmount onBlur={onBlurHandler} />
        <IncomeCategory onBlur={onBlurHandler} />
        <IncomeDescription onBlur={onBlurHandler} />
        <button className="btn btn-danger d-block m-auto w-25">Add</button>
      </form>
    </div>
  );
};

export default AddIncomeForm;
