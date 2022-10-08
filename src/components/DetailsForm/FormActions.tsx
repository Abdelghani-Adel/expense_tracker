import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

interface Props {
  activateFormEditing: () => void;
  formIsEditable: boolean;
  deleteFun: () => void;
}

const FormActions: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteHandler = () => {
    props.deleteFun();
    navigate("/");
  };
  return (
    <div className="col-2 d-flex">
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

      <button
        type="button"
        className="btn btn-danger ms-1"
        onClick={deleteHandler}
      >
        Delete
      </button>
    </div>
  );
};

export default FormActions;
