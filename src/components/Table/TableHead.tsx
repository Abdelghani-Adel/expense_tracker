import { TableColumn } from "../../interfaces/Table";

const TableHead: React.FC<{ columns: TableColumn[] }> = (props) => {
  return (
    <thead className="table-secondary">
      <tr>
        <th scope="col">#</th>
        {props.columns.map((column) => (
          <th key={column.id} className={column.style ? column.style : ""}>
            {column.title}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
