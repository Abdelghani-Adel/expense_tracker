interface Props {
  description?: string;
  onBlur: (input: any) => any;
  readonly: boolean;
}

const IncomeDescription: React.FC<Props> = (props) => {
  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    props.onBlur({ description: e.target.value });
  };
  return (
    <div className="col-5 me-3">
      <label htmlFor="" className="form-label">
        Description
      </label>
      <input
        type="text"
        className="form-control"
        defaultValue={props.description}
        readOnly={props.readonly}
        onBlur={blurHandler}
      />
    </div>
  );
};

export default IncomeDescription;
