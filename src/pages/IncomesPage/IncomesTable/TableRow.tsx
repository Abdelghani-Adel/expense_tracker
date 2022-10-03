// import { useHistory, useLocation } from "react-router-dom";

import { Income } from "../../../redux/slices/incomeSlice";
import { TableColumn } from "./tableModels";

interface Props {
  key: number;
  object: Income;
  index: number;
  columns: TableColumn[];
  basePath: string;
}

const TableRow: React.FC<Props> = (props) => {
  return (
    <tr className="cursor--pointer">
      <th scope="row">{props.index + 1}</th>
      <td>{props.object.amount}</td>
      <td>{props.object.category}</td>
      <td>{props.object.description}</td>
      <td>{props.object.date}</td>
    </tr>
  );
};

export default TableRow;
