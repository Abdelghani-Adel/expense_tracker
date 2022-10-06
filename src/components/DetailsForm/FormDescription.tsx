import { FormDescriptionPros } from "./DetailsFormInterfaces";

interface Props {
  description?: string;
  onBlur: (input: any) => any;
  readonly: boolean;
}

const FormDescription: React.FC<FormDescriptionPros> = (props) => {
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
        onBlur={onBlurHandler}
      />
    </div>
  );
};

export default FormDescription;
