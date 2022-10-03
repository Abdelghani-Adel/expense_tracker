import { Income } from "../../../redux/slices/incomeSlice";
import { TableColumn } from "./tableModels";
import TableRow from "./TableRow";

interface Props {
  dataArray: Income[];
  columns: TableColumn[];
  basePath: string;
}

const TableBody: React.FC<Props> = (props) => {
  return (
    <tbody>
      {props.dataArray.map((object, index) => (
        <TableRow
          key={object.id}
          object={object}
          index={index}
          columns={props.columns}
          basePath={props.basePath}
        />
      ))}
    </tbody>
  );
};

export default TableBody;
