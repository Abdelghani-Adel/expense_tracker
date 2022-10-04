interface Props {
  amount?: number;
  onBlur: (input: any) => any;
  readonly: boolean;
}

const ExpenseAmount: React.FC<Props> = (props) => {
  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    props.onBlur({ amount: Number(e.target.value) });
  };
  return (
    <div className="col-1 me-3">
      <label className="form-label">Amount</label>
      <input
        type="number"
        className="form-control"
        defaultValue={props.amount}
        readOnly={props.readonly}
        onBlur={blurHandler}
      />
    </div>
  );
};

export default ExpenseAmount;
