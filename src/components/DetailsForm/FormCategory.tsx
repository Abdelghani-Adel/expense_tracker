interface Props {
  category?: string;
  onBlur: (input: any) => any;
  readonly: boolean;
}

const FormCategory: React.FC<Props> = (props) => {
  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    props.onBlur({ category: e.target.value });
  };
  return (
    <div className="col-2 me-3">
      <label className="form-label">Category</label>
      <input
        type="text"
        className="form-control"
        defaultValue={props.category}
        readOnly={props.readonly}
        onBlur={blurHandler}
      />
    </div>
  );
};

export default FormCategory;
