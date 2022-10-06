interface Props {
  activateFormEditing: () => void;
  formIsEditable: boolean;
}

const FormActions: React.FC<Props> = (props) => {
  return (
    <div className="col-1">
      <button
        type="button"
        className="btn btn-warning w-100"
        hidden={props.formIsEditable}
        onClick={props.activateFormEditing}
      >
        Edit <i className="bi bi-pencil-square"></i>
      </button>
      <button
        type="submit"
        className="btn btn-primary w-100"
        hidden={!props.formIsEditable}
      >
        Save <i className="bi bi-send"></i>
      </button>
    </div>
  );
};

export default FormActions;
