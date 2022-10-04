interface Props {
  edithandler: () => any;
  editable: boolean;
}

const Actions: React.FC<Props> = (props) => {
  return (
    <div className="col-1">
      <button
        type="button"
        className="btn btn-warning w-100"
        hidden={props.editable}
        onClick={props.edithandler}
      >
        Edit <i className="bi bi-pencil-square"></i>
      </button>
      <button
        type="submit"
        className="btn btn-primary w-100"
        hidden={!props.editable}
      >
        Save <i className="bi bi-send"></i>
      </button>
    </div>
  );
};

export default Actions;
