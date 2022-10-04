interface Props {
  date?: string;
  onBlur: (input: any) => any;
  readonly: boolean;
}

const FormDate: React.FC<Props> = (props) => {
  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    props.onBlur({ date: e.target.value });
  };
  return (
    <div className="col-2 me-3">
      <label className="form-label">Date</label>
      <input
        type="text"
        className="form-control"
        defaultValue={props.date}
        disabled
      />
    </div>
  );
};

export default FormDate;
