import { useNavigate } from "react-router-dom";
import { TableRowProps } from "../../interfaces/Table";

const TableRow: React.FC<TableRowProps> = (props) => {
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
