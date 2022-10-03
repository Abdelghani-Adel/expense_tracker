import TableBody from "./TableBody";
import TableHead from "./TableHead";
import TableProps from "./tableModels";

const Table: React.FC<TableProps> = (props) => {
  return (
    <table className="table table-hover table-bordered border">
      <TableHead columns={props.columns} />
      <TableBody
        dataArray={props.dataArray}
        columns={props.columns}
        basePath={props.basePath}
      />
    </table>
  );
};

export default Table;
