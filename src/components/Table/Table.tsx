import { Fragment } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import TableProps from "./tableModels";

const Table: React.FC<TableProps> = (props) => {
  return (
    <Fragment>
      {props.dataArray.length < 1 && (
        <h3 className="text-center fw-bold text-danger">
          No {props.dataTitle} Found!
        </h3>
      )}

      {props.dataArray.length > 0 && (
        <table className="table table-hover table-bordered border">
          <TableHead columns={props.columns} />
          <TableBody
            dataArray={props.dataArray}
            columns={props.columns}
            basePath={props.basePath}
          />
        </table>
      )}
    </Fragment>
  );
};

export default Table;
