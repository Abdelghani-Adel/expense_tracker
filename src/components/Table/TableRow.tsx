import { useNavigate } from "react-router-dom";
import { TableColumn, TableObject } from "./tableModels";

interface Props {
  key: number;
  object: TableObject;
  index: number;
  columns: TableColumn[];
  basePath: string;
}

const TableRow: React.FC<Props> = (props) => {
  let navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/${props.basePath}/${props.object.id}`);
  };

  return (
    <tr className="cursor--pointer" onClick={clickHandler}>
      <th scope="row">{props.index + 1}</th>
      <td>{props.object.amount}</td>
      <td>{props.object.category}</td>
      <td>{props.object.description}</td>
      <td>{props.object.date}</td>
    </tr>
  );
};

export default TableRow;
