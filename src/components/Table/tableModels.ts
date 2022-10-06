/** will be one of the props passed to the TableRow component */
interface TableObject {
  id: number /** ID used as a key while mapping, also to used in the url when clicking on the table item */;
  amount: number /** amount, category, ... => just an object data will be rendered into <td> </td> */;
  category: string;
  description: string;
  date: string;
}

/** The props type for the TableHead component */
export interface TableColumn {
  id: number /** ID used as a key when mapping the columns into <thead> */;
  title: string /** Column title => <th> {column.title} </th> */;
  style?: string /** Option to style the column, like make it hidden => style: 'd-none'; */;
}

/** TableRow Props */
export interface TableRowProps {
  key: number;
  object: TableObject /** Data object will be mapped in multiple <td> </td> */;
  index: number /** A number used to render the line number in the table <th> {props.index + 1} </th> */;
  basePath: string /** A base url to be build on it for navigation when clicking on a table item */;
}

/** TableBody Props */
export interface TableBodyprops {
  dataArray: TableObject[] /** Array contains expenses or incomes objects with the type TableObject */;
  columns: TableColumn[] /** Array contains columns objects to map the when creating <thead> */;
  basePath: string /** A base url to be build on it for navigation when clicking on a table item */;
}

/** Table props */
export default interface TableProps extends TableBodyprops {
  dataTitle: string /** A string tytle to be printed at the <h3> No -Incomes- found! </h3> */;
}
