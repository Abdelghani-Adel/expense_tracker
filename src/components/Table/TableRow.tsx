// import { useHistory, useLocation } from "react-router-dom";
import { TableColumn, TableDataObject } from "./tableModels";

interface Props {
  key: number;
  object: TableDataObject;
  index: number;
  columns: TableColumn[];
  basePath: string;
}

const TableRow: React.FC<Props> = (props) => {
  return (
    <tr className="cursor--pointer">
      <th scope="row">{props.index + 1}</th>
      {props.columns.map((column) => (
        <td key={column.id}>{props.object[`${column.title}`]}</td>
      ))}
    </tr>
  );
};

export default TableRow;
