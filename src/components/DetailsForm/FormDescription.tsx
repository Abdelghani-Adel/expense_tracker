import { FormDescriptionProps } from "../../interfaces/DetailsForm";

const FormDescription: React.FC<FormDescriptionProps> = (props) => {
  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    props.updateObject({ description: e.target.value });
  };
  return (
    <div className="col-5 me-3">
      <label className="form-label">Description</label>
      <input
        type="text"
        className="form-control"
        defaultValue={props.description}
        readOnly={props.readonly}
        // onBlur={onBlurHandler}
        onBlurCapture={onBlurHandler}
      />
    </div>
  );
};

export default FormDescription;
