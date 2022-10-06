import { TableBodyprops } from "./tableModels";
import TableRow from "./TableRow";

const TableBody: React.FC<TableBodyprops> = (props) => {
  return (
    <tbody>
      {props.dataArray.map((object, index) => (
        <TableRow
          key={object.id}
          object={object}
          index={index}
          basePath={props.basePath}
        />
      ))}
    </tbody>
  );
};

export default TableBody;
