import { FormCategoryProps } from "./DetailsFormInterfaces";

const FormCategory: React.FC<FormCategoryProps> = (props) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    props.updateObject({ category: e.target.value });
  };
  return (
    <div className="col-2 me-3">
      <label className="form-label">Category</label>
      <select
        className="form-select"
        defaultValue={`${props.category}`}
        onChange={onChangeHandler}
        disabled={props.readonly}
      >
        {props.categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormCategory;
