interface Props {
  date: string;
  readonly: boolean;
}

const FormDate: React.FC<Props> = (props) => {
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
