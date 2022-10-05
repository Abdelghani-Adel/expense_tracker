interface Props {
  category?: string;
  onBlur: (input: any) => any;
  categories: { id: number; title: string; subCategories?: any }[];
  readonly: boolean;
}

const FormCategory: React.FC<Props> = (props) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    props.onBlur({ category: e.target.value });
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
          <option key={category.id} value={category.title}>
            {category.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormCategory;
