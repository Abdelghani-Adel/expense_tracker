import { FormAmountProps } from "../../interfaces/DetailsForm";

const FormAmount: React.FC<FormAmountProps> = (props) => {
  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    props.updateObject({ amount: Number(e.target.value) });
  };

  return (
    <div className="col-1 me-3">
      <label className="form-label">Amount</label>
      <input
        type="number"
        className="form-control"
        defaultValue={props.amount}
        readOnly={props.readonly}
        // onBlur={onBlurHandler}
        onBlurCapture={onBlurHandler}
      />
    </div>
  );
};

export default FormAmount;
