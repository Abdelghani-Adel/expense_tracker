import { TableBodyprops } from "../../interfaces/Table";
import TableRow from "./TableRow";

const TableBody: React.FC<TableBodyprops> = (props) => {
  // console.log(props.dataArray[0]);

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
